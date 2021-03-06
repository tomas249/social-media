const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const Post = require('../models/Post');
const advancedResults = require('../middleware/advancedResults');

// @desc      Get all users
// @route     GET /api/users
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const cb = (data) => {
    res.status(200).json({
      success: true,
      data
    });
  }
  await advancedResults(cb, find='all', model=User)(req, res, next);
});


// @desc      Get user by id
// @route     GET /api/users/:userId
// @access    Public
exports.getUserById = asyncHandler(async (req, res, next) => {
  req.query._id = req.params.userId;
  const cb = (data) => {
    res.status(200).json({
      success: true,
      data: data[0]
    });
  }
  await advancedResults(cb, find='byId', model=User)(req, res, next);
});


// @desc      Get user by username
// @route     GET /api/users/u/:username
// @access    Public
exports.getUserByUsername = asyncHandler(async (req, res, next) => {
  req.query.username = req.params.username;
  const cb = (data) => {
    if (!data) throw new ErrorResponse(404, 'User not found');
    res.status(200).json({
      success: true,
      data
    });
  }
  await advancedResults(cb, find='one', model=User)(req, res, next);
});


// @desc      Update count
// @route     GET /api/users/:userId/resetcount
// @access    Public
exports.resetCount = asyncHandler(async (req, res, next) => {
  const postsLength = await Post.countDocuments({ owner: req.params.userId });
  await User.findByIdAndUpdate(req.params.userId,
    {
     'count.posts': postsLength
    });
  res.status(200).json({ success: true });
});


// @desc      Update user profile
// @route     GET /api/users/updateProfile
// @access    Public
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id, req.body.updatedUser, {new:true, runValidators:true});
  res.status(200).json({ success: true, data: updatedUser });
});