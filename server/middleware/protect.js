const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

/**
 * Verifies token and adds user to request
 * Usually first middleware for routes
 */
exports.verifyToken = asyncHandler(async (req, res, next) => {
  // Get Token from header
  const rawHeader = req.header('Authorization');
  if (!rawHeader && req.verifySkip) { 
    next();
  }
  else {
    if (!rawHeader && !req.verifySkip) throw new ErrorResponse(401, 'Token no provided');
    const token = rawHeader.split('Bearer ')[1];
  
    // Verify token
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) throw new ErrorResponse(401, 'Invalid Token');
  
    // Get user
    req.user = await User.findById(verified.id);
    next();
  }
});

/**
 * Checks if the user has the correct role to access a route
 * Usually after verifyToken
 * 
 * Roles are treated as levels because each parent inherit
 * the privileges from the child
 * Example: Moderator has User's privilages
 * Example: Admin has Moderator & User's privilages
 */
exports.authorize = (role) => (req, res, next) => {
  const rolesByLevel = ['user', 'moderator', 'admin'];
  const userLevelRole = rolesByLevel.indexOf(req.user.role);
  const acceptedLevelRole = rolesByLevel.indexOf(role);

  if(userLevelRole < acceptedLevelRole) {
    throw new ErrorResponse(402, `Your role must be at least ${role} to access this endpoint`);
  } else {
    next();
  }
};
