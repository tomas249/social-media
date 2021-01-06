const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const User = require('../models/User');

// @desc      Refresh token
// @route     POST /api/tokens/refresh
// @access    Public
exports.refresh = asyncHandler(async (req, res, next) => {

  const refreshToken = req.body.refreshToken;
      
  // Get AccessToken from header
  const rawHeader = req.header('Authorization');
  if (!rawHeader) throw new ErrorResponse(400, 'AccessToken no provided');
  const accessToken = rawHeader.split('Bearer ')[1];

  // Verify given token and find UID
  const uid = await jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
    if (decoded) throw new ErrorResponse(400, 'Token up to date');
    if (err.name === 'TokenExpiredError') return jwt.decode(accessToken).id;
    throw new ErrorResponse(400, 'Invalid AccessToken');
  });

  // Check if RefreshToken corresponds to the User
  const validate = await Token.exists({
    belongsTo: uid,
    token: refreshToken
  });
  if (!validate) throw new ErrorResponse(400, 'Invalid RefreshToken');

  // Create new AccessToken
  const user = await User.findById(uid);
  const newAccessToken = user.getSignedJwtToken();

  res.status(200).send({
    success: true,
    message: {
      refreshToken: refreshToken,
      accessToken: newAccessToken
    }
  });
});


// @desc      Get refresh tokens associated to user
// @route     GET /api/tokens/associated
// @access    Private
exports.getAssociated = asyncHandler(async (req, res, next) => {
  let tokens = await Token.find({belongsTo: req.user._id });

  res.status(200).send({
    success: true,
    data: tokens
  });
});


// @desc      Remove refresh token
// @route     POST /api/tokens/remove
// @access    Public
exports.remove = asyncHandler(async (req, res, next) => {
  const refreshToken = req.body.refreshToken;

  // Check if RefreshToken exists
  const verified = await Token.findOneAndDelete({
    token: refreshToken,
    belongsTo: req.user._id
  });
  if (!verified) throw new ErrorResponse(400, 'RefreshToken does not exist');

  res.status(204).send({
    success: true
  });
});
