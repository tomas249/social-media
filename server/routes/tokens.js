const router = require('express').Router();

// Controllers
const { refresh, remove } = require('../controllers/tokens');
const { verifyToken } = require('../middleware/protect');

// Helpers

router.post('/refresh', refresh);
router.post('/remove', verifyToken, remove);

module.exports = router;
