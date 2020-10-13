const express = require('express');
const router = express.Router();

// Middlewares
const advancedResults = require('../middleware/advancedResults');
const { verifyToken, authorize } = require('../middleware/protect');
// Controllers
const { publishPost, replyPost, getPosts, deletePost, likePost, getFollowersPosts } = require('../controllers/posts');
const { publishDraftPost } = require('../controllers/draftPosts');

router.get('/user', verifyToken, getFollowersPosts);
router.post('', verifyToken, publishPost);
router.post('/:postId/reply', verifyToken, replyPost);
router.get('', getPosts);
router.delete('/:postId', verifyToken, deletePost);
router.get('/:postId/like', verifyToken, likePost);

router.post('/draft', verifyToken, publishDraftPost);

module.exports = router;
