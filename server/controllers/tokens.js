const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

// @desc      Refresh token
// @route     POST /api/tokens/refresh
// @access    Public
exports.refresh = asyncHandler(async (req, res, next) => {

  const refreshToken = req.body.refreshToken;
      
  // Get AccessToken from header
  const rawHeader = req.header('Authorization');
  if (!rawHeader) throw new ErrorResponse(401, 'AccessToken no provided');
  const accessToken = rawHeader.split('Bearer ')[1];

  // Verify given token and find UID
  const uid = await jwt.verify(accessToken, process.env.TOKEN_SECRET, (err, decoded) => {
    if (decoded) throw new ErrorResponse(401, 'Token up to date');
    if (err.name === 'TokenExpiredError') return jwt.decode(accessToken).uid;
    throw new ErrorResponse('Invalid AccessToken');
  });

  // Check if RefreshToken corresponds to the User
  const validate = await Token.exists({
    belongsTo: uid,
    token: refreshToken
  });
  if (!validate) throw new ErrorResponse(401, 'Invalid RefreshToken');

  // Create new AccessToken
  const newAccessToken = await jwt.sign({
    uid: uid,
    role: userRole.role
  }, process.env.TOKEN_SECRET, {expiresIn: process.env.EXPIRES_IN});

  res.status(200).send({
    success: true,
    message: {
      refreshToken: refreshToken,
      accessToken: newAccessToken
    }
  });
});


// @desc      Remove refresh token
// @route     POST /api/tokens/remove
// @access    Public
exports.remove = asyncHandler(async (req, res, next) => {
  // Check if RefreshToken exists
  const verified = await Token.findOneAndDelete({
    _id: req.body.refreshTokenId,
    belongsTo: req.uid
  });
  if (!verified) throw new ErrorResponse(401, 'RefreshToken does not exists');

  res.status(204).send({
    success: true
  });
});
