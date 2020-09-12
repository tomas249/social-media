const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const SocketUser = require('../models/SocketUser');

/**
 * 
 * **IMPORTANT**
 * 
 * This controller is temporal and not definitive because
 * eventually it will use different strategy for authentication
 * 
 * For now, it uses JsonWebToken as access tokens that do
 * not expire and there is not refresh token to compensate
 * 
 * Because of this, this controller is not explained and
 * it is composed only by the fundamental functions
 * 
 */


// @desc      Register user
// @route     POST /api/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  // Create user
  const user = new User({
    name: name,
    email: email,
    password: password
  });
  await user.save();

  res.status(201).json({
    success: true,
    message: 'Registered successfully'
  });
});


// @desc      Login user
// @route     POST /api/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    throw new ErrorResponse(400, 'Please provide an email and a password');
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new ErrorResponse(401, 'Invalid credentials');

  // Check if password matches
  const matches = await user.matchPassword(password);
  if (!matches) throw new ErrorResponse(401, 'Invalid credentials');

  // Activate SocketUser
  await SocketUser.findByIdAndUpdate(user.socketId, { active: true });

  sendTokenResponse(user, 200, res);
});


// @desc      Logout user
// @route     GET /api/auth/logout
// @access    Private
exports.logout = asyncHandler(async (req, res, next) => {
  // Deactivate SocketUser
  await SocketUser.findByIdAndUpdate(req.user.socketId, { active: false });
  res.status(200).json({
    success: true
  });
});



// @desc      Activate SocketIO
// @route     GET /api/auth/socketio/activate
// @access    Private
exports.activateSocketIO = asyncHandler(async (req, res, next) => {
  // Activate SocketUser
  await SocketUser.findByIdAndUpdate(req.user.socketId, { active: true });
  res.status(200).json({
    success: true
  });
});
// @desc      Deactivate SocketIO
// @route     GET /api/auth/socketio/deactivate
// @access    Private
exports.deactivateSocketIO = asyncHandler(async (req, res, next) => {
  // Deactivate SocketUser
  await SocketUser.findByIdAndUpdate(req.user.socketId, { active: false });
  res.status(200).json({
    success: true
  });
});


// Get token from model and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).json({
    success: true,
    token,
  });
};
