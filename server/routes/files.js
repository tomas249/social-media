const express = require('express');
const router = express.Router();

const upload = require('../utils/imagePath');


function returnAvatar(req, res) {
  try {
    // if (!req.file) throw new Error('Image could not be uploaded');

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
    // if (!req.file) throw new Error('Image could not be uploaded');
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

router.post('/updateAvatar', upload.single('avatar'), returnAvatar);
router.post('/uploadGallery', upload.array('gallery', 5), returnGallery);


module.exports = router;