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
    const id = new Date().valueOf().toString(36) + Math.random().toString(36).substr(2);
    cb(null, id + path.extname(file.originalname));
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