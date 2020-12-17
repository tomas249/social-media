const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

// Create Token
const randToken = crypto.randomBytes(15).toString('hex');

const tokenSchema = new Schema({
  belongsTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  token: {
    type: String,
    default: randToken
  },
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