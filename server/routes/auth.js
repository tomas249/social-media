const express = require('express');
const router = express.Router();


// Middlewares
const { verifyToken, authorize } = require('../middleware/protect');
// Controllers
const { register, login, logout } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyToken, logout);

module.exports = router;
