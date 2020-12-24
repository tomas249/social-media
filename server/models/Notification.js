const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  responsible: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const populateResponsible = function(next) {
  this.populate('responsible', 'name username description count avatar');
  next();
};

NotificationSchema.
  pre('findOne', populateResponsible).
  pre('find', populateResponsible);

module.exports = mongoose.model('Notification', NotificationSchema);