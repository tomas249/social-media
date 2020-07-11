const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Post = require('../models/Post');
const advancedResults = require('../middleware/advancedResults');

// @desc      Publish post
// @route     POST /api/posts
// @access    Private
exports.publishPost = asyncHandler(async (req, res, next) => {
  if (!req.body.text) throw new ErrorResponse(400, 'Introduce some text');

  const post = await Post.create({
    owner: req.user._id,
    text: req.body.text
  });
  res.status(201).json({
    success: true,
    data: post
  });
});

// @desc      Reply post
// @route     POST /api/posts/:postId/reply
// @access    Private
exports.replyPost = asyncHandler(async (req, res, next) => {

  // The reply keeps a copy of the path to the main post
  const parentId = req.params.postId;
  const parentModel = await Post.findById(parentId).select('parent replyRef');
  const parentPath = parentModel.parent.concat(parentId);
  const replyRef = parentModel.replyRef.concat(parentModel.owner.username);

  // Get parent field from parent post and add itself
  const reply = await Post.create({
    owner: req.user._id,
    text: req.body.text,
    parent: parentPath,
    replyRef: replyRef
  });

  // Push child into parent
  // const newParent = await parentModel.updateOne({ $push: { child: reply._id } }, { new: true });
  const newParent = await Post.findByIdAndUpdate(parentId, { $push: { child: reply._id } }, { new: true })
    .populate('child');

  res.status(200).json({
    success: true,
    data: newParent
  });
});


// @desc      Get all posts
// @route     GET /api/posts
// @access    Public
exports.getPosts = asyncHandler(async (req, res, next) => {
  // Parent select fields
  const parentSelect = req.query.parentSelect?.split(',').join(' ') || '';
  // Check for population level parameters
  let parentLimit = req.query.parentLimit || 0; // Usually get all parents
  let childLimit = req.query.childLimit || '5'; // Return 5 child results
  let childLevel = req.query.childLevel || 2; // Populate 2 nested levels

  // Query params into array
  // This is the argument for the parameter limit
  // of Post statics nestedPopulation
  // (check 'Post from models')
  childLimit = childLimit.split(',').map(l => parseInt(l));

  // Some params need to be an integer
  parentLimit = parseInt(parentLimit); 
  childLevel = parseInt(childLevel); 

  // Delete them from the query to avoid having 
  // to add them in the excludedFields in advancedResults
  ['parentSelect', 'parentLimit', 'childLevel', 'childLimit'].forEach(param => {
    delete req.query[param];
  });

  // Set parent find field
  // By default, search for all empty parent arrays, that is
  // to say for all posts (and not replies)
  //
  // (skip for now)
  // req.query.parent = req.query.parent || { 'size': 0 };

  // For nested child populate opts we use a recursive statics from the model
  const populateChild = Post.nestedPopulate(childLevel, childLimit);

  // Parent opts can be set now
  const populateParent = {
    path: 'parent',
    select: parentSelect,
    options: {
      sort: '-parent',
      limit: parentLimit,
    }
  };

  // In order to populate parent and child, we pass an array of both
  const populateOpt = [populateChild, populateParent]

  // AdvancedResults callback
  const cb = (data) => {
    res.status(200).json({
      success: true,
      data
    });
  }
  // Unlike the above controllers, this time
  // we use all available parameters
  await advancedResults(
    cb, 
    find='all', 
    model=Post,
    populate=populateOpt
  )(req, res, next);
});


// @desc      Delete post
// @route     DELETE /api/posts/:postId
// @access    Private
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);
  post.deleteOne(); // Call in this way to trigger the hooks (none for now)

  res.status(204).json({
    success: true
  });
});


// @desc      Like post
// @route     POST /api/posts/:postId
// @access    Private
exports.likePost = asyncHandler(async (req, res, next) => {

  // Check if user already liked this post
  const postId = req.params.postId;
  const userId = req.user._id;

  const postSearch = await Post.exists(
    {
      _id: postId,
      whoLiked: { $in: [userId] }
    }
  )
  
  let post;
  const options = { new: true };

  // Like or dislike
  if (postSearch) {
    post = await Post.findByIdAndUpdate(postId,
      {
        $inc: { likes: -1 },
        $pull: { whoLiked: userId }
      }, options);
  } else {
    post = await Post.findByIdAndUpdate(postId,
      {
        $inc: { likes: 1 },
        $push: { whoLiked: userId }
      }, options);
  }
  
  res.status(200).json({
    success: true,
    data: post
  });
});