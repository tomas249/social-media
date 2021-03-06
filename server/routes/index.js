const router = require("express").Router();
const errorHandler = require('../middleware/error');

const auth = require('./auth');
const users = require('./users');
const posts = require('./posts');
const files = require('./files');
const notifications = require('./notifications');
const tokens = require('./tokens');
// const socketio = require('./socketio');

router.use('/auth', auth);
router.use('/users', users);
router.use('/posts', posts);
router.use('/files', files);
router.use('/notifications', notifications);
router.use('/tokens', tokens);
router.use(errorHandler);

module.exports = router;
