const router = require('express').Router();

// Controllers
const { refresh, remove, getAssociated } = require('../controllers/tokens');
const { verifyToken } = require('../middleware/protect');

router.post('/refresh', refresh);
router.post('/remove', verifyToken, remove);
router.get('/associated', verifyToken, getAssociated);

module.exports = router;
