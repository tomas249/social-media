const express = require('express');
const router = express.Router();

// Controllers
const { verifyToken, authorize } = require('../middleware/protect');
const { register, login, logout } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', verifyToken, logout);

module.exports = router;
