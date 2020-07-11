const express = require('express');
const router = express.Router();

// Middlewares
const advancedResults = require('../middleware/advancedResults');
const { verifyToken, authorize } = require('../middleware/protect');
// Controllers
const { getUsers, getUserById, getUserByUsername } = require('../controllers/users');

 
router.get('', getUsers ); //adv
router.get('/u/:username', getUserByUsername);
router.get('/:userId', getUserById);
// router.put('/updateProfile', updateProfile);
// router.get('/:userId/posts'); // > re-route

module.exports = router;
