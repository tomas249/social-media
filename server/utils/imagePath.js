const multer = require('multer');
const path = require('path');

// Reject no images
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Multer config
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const fieldPath = {
      avatar: path.join(__dirname, '..', 'public', 'avatars'),
      gallery: path.join(__dirname, '..', 'public', 'posts')
    }
    const Publicpath = fieldPath[file.fieldname];
    cb(null, Publicpath);
  },
  filename: function(req, file, cb) {
    let extension;
    if (file.mimetype == 'image/jpeg') {
      extension = '.jpg';
    }
    else if (file.mimetype == 'image/png') {
      extension = '.png';
    }
    // cb(null, req.uid + extension);
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 20
  },
  fileFilter: fileFilter
});

module.exports = upload;