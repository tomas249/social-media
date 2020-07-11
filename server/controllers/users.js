const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
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
      data
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