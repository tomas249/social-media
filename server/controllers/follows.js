const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Follow = require('../models/Follow');
const User = require('../models/User');
const Notification = require('../models/Notification');

// @desc      Follow or unfollow someone
// @route     GET /api/users/:userId/follow
// @access    Private
exports.follow = asyncHandler(async (req, res, next) => {
  const followerId = req.user._id;
  const followingId = req.params.userId;

  if (followerId == followingId) throw new ErrorResponse(400, 'Same user cannot follow himself');

  // Check if user is already following this another user
  const followExists = await Follow.exists(
    {
      user: followerId,
      following: { $in: followingId }
    }
  );

  let followingData, followerData, followerCount, followingCount;

  if (followExists) {
    // Remove follow
    followingData = await Follow.findOneAndUpdate(
      { user: followingId },
      { $pull: { 'followers': followerId } }
    );
    followerCount = await User.findByIdAndUpdate(followerId,
      {
        $inc: { 'count.following': -1 }
      });
    followerData = await Follow.findOneAndUpdate(
      { user: followerId },
      { $pull: { 'following': followingId } }
    );
    followingCount = await User.findByIdAndUpdate(followingId,
      {
        $inc: { 'count.followers': -1 }
      });

    // Create notification
    let notification = await Notification.create({
      user: followingId,
      responsible: followerId,
      text: 'is not following you anymore'
    });
    notification = await notification.populate('responsible', 'name username description count avatar').execPopulate();
    // req.io.to(req.io.id).emit('message', notification)
  } else {
    // Add follow
    followingData = await Follow.findOneAndUpdate(
      { user: followingId },
      { $push: { 'followers': followerId } }
    );
    followerCount = await User.findByIdAndUpdate(followerId,
      {
        $inc: { 'count.following': 1 }
      });
    followerData = await Follow.findOneAndUpdate(
      { user: followerId },
      { $push: { 'following': followingId } }
    );
    followingCount = await User.findByIdAndUpdate(followingId,
      {
        $inc: { 'count.followers': 1 }
      });
    // Create notification
    let notification = await Notification.create({
      user: followingId,
      responsible: followerId,
      text: 'started following you'
    });
    notification = await notification.populate('responsible', 'name username description count avatar').execPopulate();
    // req.io.to(req.io.id).emit('message', notification)
  }

  res.status(200).json({
    success: true,
    followingData,
    followerData,
    followerCount,
    followingCount
  });
});

// @desc      Get follow list
// @route     GET /api/users/:userId/followList/:populateField
// @access    Public
exports.getFollowList = asyncHandler(async (req, res, next) => {
  let followList;
  const populateField = req.params.populateField;

  if (populateField) {
    followList = await Follow.find({ user: req.params.userId })
      .populate({path: populateField, options: { select: 'name username description count avatar' }})
  } else {
    followList = await Follow.find({ user: req.params.userId });
  }

  res.status(201).json({
    success: true,
    data: followList[0]
  });
});