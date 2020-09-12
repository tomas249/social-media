const express = require('express');
const router = express.Router();

// Middlewares
const { verifyToken, authorize } = require('../middleware/protect');

// Controllers
const { activateSocketIO, deactivateSocketIO } = require('../controllers/auth');

// SocketUser
router.use('/connect', (req, res, next) => {
  console.log('hellooo')
  req.io = require('./middleware/sockets').listen(req.server, req);;
  // next();
});
router.get('/socketio/activate', verifyToken, activateSocketIO);
router.get('/socketio/deactivate', verifyToken, deactivateSocketIO);

module.exports = router;
