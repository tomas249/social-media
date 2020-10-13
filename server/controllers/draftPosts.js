const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const advancedResults = require('../middleware/advancedResults');
const Post = require('../models/Post');

// @desc      Publish draft post
// @route     POST /api/posts/draft
// @access    Private
exports.publishDraftPost = asyncHandler(async (req, res, next) => {
  const post = await Post.create({
    owner: req.user._id,
    text: req.body.text
  });

  res.status(201).json({
    success: true,
    data: post
  });
});
