const express = require('express');
const router = express.Router();

const { verifyToken, authorize } = require('../middleware/protect');
const { getNotifications, readNotification } = require('../controllers/notifications');

router.get('/', verifyToken, getNotifications);
router.get('/read/:notificationId', verifyToken, readNotification);

module.exports = router;
