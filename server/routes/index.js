const router = require("express").Router();
const errorHandler = require('../middleware/error');

const auth = require('./auth');
const users = require('./users');
const posts = require('./posts');
const files = require('./files');

// router.use('/files', files);
router.use('/auth', auth);
router.use('/users', users);
router.use('/posts', posts);
router.use(errorHandler);

module.exports = router;
