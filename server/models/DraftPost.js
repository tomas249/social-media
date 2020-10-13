const mongoose = require('mongoose');
const ErrorResponse = require('../utils/errorResponse');

const DraftPostSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    maxlength: [800, 'Text field max length is 300 characters']
  },
  media: [{
    filename: {
      type: String
    },
    relativePath: {
      type: String
    },
    fullPath: {
      type: String
    },
    filetype: {
      enum: ['image', 'video', 'gif']
    }
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('DraftPost', DraftPostSchema);
