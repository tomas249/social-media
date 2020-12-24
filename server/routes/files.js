const express = require('express');
const router = express.Router();

// MiddleWares
const { verifyToken, authorize } = require('../middleware/protect');
// Utils
const upload = require('../utils/imagePath');


/**
 * Functions too short to be added into a controller
 */
function returnAvatar(req, res) {
  try {
    const file = req.file.filename;

    res.status(201).send({
      success: true,
      message: 'Published successfully',
      data: file
    });
  }
  catch (err) {
    res.status(400).send({
      success: false
    });
  }
}

function returnGallery(req, res) {
  try {
    const file = req.files;

    res.status(201).send({
      success: true,
      message: 'Published successfully',
      data: file
    });
  }
  catch (err) {
    res.status(400).send({
      success: false
    });
  }
}

router.post('/updateAvatar', verifyToken, upload.single('avatar'), returnAvatar);
router.post('/uploadGallery', verifyToken, upload.array('gallery', 5), returnGallery);


module.exports = router;