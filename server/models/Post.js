const mongoose = require('mongoose');
const ErrorResponse = require('../utils/errorResponse');
const fs = require('fs');
const path = require('path');

const PostSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Please indicate who is the owner'],
  },
  text: {
    type: String,
    maxlength: [800, 'Text field max length is 300 characters'],
    required: [true, 'Please introduce some text'],
  },
  media: Array,
  likes: {
    type: Number,
    default: 0,
  },
  whoLiked: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  reports: {
    type: Number,
    default: 0,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  parentRef: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: false
  },
  parent: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Post'
  }],
  child: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Post'
  }],
  replyRef: [{
    type: String
  }]
}, {
  timestamps: true
});

/**
 * Recursive function that generates an object 
 * which is used to populate children posts
 * according to query params
 * 
 * This functions starts building from the last level
 * and goes growing until gets for the asked levels.
 * 
 * @param {int}   level: Levels of nested children to populate
 * @param {array} limit: Number of results per each population
 * @param {obj}   obj: Param that is used for recursive track (DO NOT PASS ANYTHING)!
 * 
 * Example: level=3, limit=[2,3,5]
 * Explanation: from first level of population will be returned 2 resulsts,
 * from second level of population will be returned 3 results,
 * from third level of population will be returned 5 results.
 * 
 * Example: level=3, limit=[2]
 * Explanation: You can observe that limits for 2nd and 3rd level are not specified.
 * In this case, the two last levels will inherit from the first one.
 * 1st level  -> 2 results,
 * 2nd level  -> 2 result,
 * 3rd level  -> 2 result
 * 
 * Example: level=3, limit=[2,1]
 * Explanation: Same happens:
 * 1st level  -> 2 results,
 * 2nd level  -> 1 result,
 * 3rd level  -> 1 result
 * 
 */
PostSchema.statics.nestedPopulate = function (level=0, limit, obj) {
  // Level = 0 does populate nothing
  if (level == 0) return {path: ''};

  // Level of population must be lower than the amount of limits provided
  if (level < limit.length && !obj) throw new ErrorResponse(400, 'Invalid parameters');

  // If limit is not provided for certain level, inherit from last available
  outerLim = limit[level-2] || limit[limit.length - 1];
  innerLim = limit[level-1] || limit[limit.length - 1];

  // Outer: this is the first object and corresponds to the last level
  const selectFields = 'text createdAt parent parentRef child replyRef media likes whoLiked media=';
  if (!obj) obj = {path:'child', options: { limit:innerLim, select: selectFields }}

  // Break recursive func
  if (level == 1) return obj;

  // Inner: previous to outer object
  return this.nestedPopulate(level-1, limit, {
    path: 'child',
    populate: obj,
    options: {
      limit: outerLim,
      select: selectFields
    }
  });
};

// Autopopulate owner field
// Because of this, whether this field is selected or not
// it will be returned. To avoid this, it has to be explicitly
// excluded like this: www.example.com/route?select=-owner
const populateOwner = function(next) {
  this.populate('owner', 'name username description count avatar');
  next();
};

PostSchema.
  pre('findOne', populateOwner).
  pre('find', populateOwner);


PostSchema.post('findOneAndDelete', async function(post) {
  // Remove media
  if (post.media && post.media.length !== 0) {
    post.media.forEach(file => {
      const p = path.join(__dirname, '..', 'public', 'posts', file.filename);
      fs.unlink(p, (err) => {
        if (err) { throw new ErrorResponse(500, err); }
      });
    });
  }

  // Remove all children
  await post.child.forEach(async child => {
    await this.model.findByIdAndDelete(child);
  });

});

module.exports = mongoose.model('Post', PostSchema);
