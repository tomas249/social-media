const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  belongsTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  token: String,
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Token', tokenSchema);