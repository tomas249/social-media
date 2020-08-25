const express = require('express');
const router = express.Router();

// Middlewares
const advancedResults = require('../middleware/advancedResults');
const { verifyToken, authorize } = require('../middleware/protect');
// Controllers
const { getUsers, getUserById, getUserByUsername, resetCount, updateProfile } = require('../controllers/users');
const { follow, getFollowList } = require('../controllers/follows');
 
router.get('', getUsers ); //adv
router.get('/u/:username', getUserByUsername);
router.post('/updateProfile', verifyToken, updateProfile);
router.get('/:userId', getUserById);
// router.get('/:userId/posts'); // > re-route

// Temporal
router.get('/:userId/resetcount', resetCount);

router.get('/:userId/follow', verifyToken, follow);
router.get('/:userId/followList/:populateField', getFollowList);
router.get('/:userId/followList', getFollowList);

module.exports = router;
