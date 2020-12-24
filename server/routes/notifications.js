const express = require('express');
const router = express.Router();

// Middlewares
const { verifyToken, authorize } = require('../middleware/protect');
// Controllers
const { getNotifications, readNotification } = require('../controllers/notifications');

router.get('/', verifyToken, getNotifications);
router.get('/read/:notificationId', verifyToken, readNotification);

module.exports = router;
