const express = require('express');
const router = express.Router();

// Middlewares
const advancedResults = require('../middleware/advancedResults');
const { verifyToken, authorize } = require('../middleware/protect');
// Controllers
const { publishPost, replyPost, getPosts, deletePost, likePost } = require('../controllers/posts');

router.post('', verifyToken, publishPost);
router.post('/:postId/reply', verifyToken, replyPost);
router.get('', getPosts);
router.delete('/:postId', verifyToken, deletePost);
router.get('/:postId/like', verifyToken, likePost);

module.exports = router;
