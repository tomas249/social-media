const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const Token = require('../models/Token');
const SocketUser = require('../models/SocketUser');
const Sniffr = require('sniffr');
const sniff = new Sniffr();

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
  // await SocketUser.findByIdAndUpdate(user.socketId, { active: true });

  sendTokenResponse(req, user, 200, res);
});


// @desc      Logout user
// @route     GET /api/auth/logout
// @access    Private
exports.logout = asyncHandler(async (req, res, next) => {
  // Check if RefreshToken is provided
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) throw new ErrorResponse('Please provide a RefreshToken');

  // Check if RefreshToken exists and belongs to the right user
  const validate = await Token.findOneAndDelete({
    belongsTo: req.uid,
    token: refreshToken
  });
  if (!validate) throw new ErrorResponse('RefreshToken does not exists');

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
const sendTokenResponse = async (req, user, statusCode, res) => {
  // For each login, new Refresh/AccessToken are created:

  // Create RefreshToken's title
  sniff.sniff(req.headers['user-agent']);
  const usedOS = sniff.os.name[0].toUpperCase() + sniff.os.name.slice(1);
  const usedBrowser = sniff.browser.name[0].toUpperCase() + sniff.browser.name.slice(1);
  const newTitle = `${usedBrowser} on ${usedOS}`;

  // Create new RefreshToken
  const newRefreshToken = new Token({
    belongsTo: user._id,
    title: newTitle
  });
  const refreshTokenDB = await newRefreshToken.save();
  const refreshToken = refreshTokenDB._id;

  // Create new AccesshToken
  const accessToken = user.getSignedJwtToken();
  
  res.status(statusCode).json({
    success: true,
    data: {refreshToken, accessToken},
  });
};
