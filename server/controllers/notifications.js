const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Notification = require('../models/Notification');


// @desc      Send Notification
// @route     POST /api/notifications/:userDestinationId
// @access    Private
exports.sendNotification = asyncHandler(async (req, res, next) => {
  /**
   * TODO
   */
});


// @desc      Get Notification
// @route     GET /api/notifications
// @access    Private
exports.getNotifications = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  let onlyUnread = req.query.onlyUnread || true;
  onlyUnread = (onlyUnread == 'true');

  let findOpt = { user: userId };
  if (onlyUnread) { findOpt.read = false };
  const notifications = await Notification.find(findOpt);

  res.status(200).json({
    success: true,
    data: notifications
  });
});

// @desc      Mark notification as read
// @route     GET /api/notifications/read/:notificationId
// @access    Private
exports.readNotification = asyncHandler(async (req, res, next) => {
  const notificationId = req.params.notificationId;

  await Notification.findByIdAndUpdate(notificationId, { read: true })

  res.status(200).json({
    success: true
  });
});