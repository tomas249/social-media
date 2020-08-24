const mongoose = require('mongoose');

const FollowSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  followers: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Follow', FollowSchema);