const mongoose = require('mongoose');

const SocketUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  socketId: String,
  active: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('ScoketUser', SocketUserSchema);
