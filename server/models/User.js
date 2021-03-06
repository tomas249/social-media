const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const SocketUser = require('../models/SocketUser');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    minlength: [2, 'Name field min length is 2 characters'],
    maxlength: [20, 'Name field max length is 20 characters'],
  },
  username: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    default: 'I like fizz buzz :D',
    maxlength: [400, 'Description field max length is 400 characters'],
  },
  avatar: {
    filename: {
      type: String,
      default: 'default-avatar.png'
    },
    relativePath: {
      type: String,
      default: '/a/default-avatar.png'
    }
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: [4, 'Password field min length is 4 characters'],
    maxlength: [30, 'Password field max length is 30 characters'],
    select: false,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  socketId: {
    type: mongoose.Schema.ObjectId,
    ref: 'SocketUser'
  },
  role: {
    type: String,
    enum: ['user', 'publisher', 'admin'],
    default: 'user',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  count: {
    posts: {
      type: Number,
      default: 0
    },
    followers: {
      type: Number,
      default: 0
    },
    following: {
      type: Number,
      default: 0
    }
  }
}, { timestamps: true });

// Generate random id
const generateUsername = (name) => {
  /**
   * Output: name0000X (name + 4 integers + 1 letter)
   */
  // First part from timestamp
  const id = Date.now().toString().substr(-4);
  // Second part from random numbers
  const randNumber = Math.round(Math.random() * (90 - 65) + 65);
  // Username ends with a letter
  const end = String.fromCharCode(randNumber);
  // Concatonate and return
  return name.trim().toLowerCase().split(' ')[0] + id + end;
};

// First time User is created
UserSchema.pre('save', async function (next) {
  this._wasNew = this.isNew;
  // Validation to differentiate between created & updated
  if (!this.isNew) next();

  // Check if email is already in use
  const emailExists = await this.model('User').exists({ email: this.email });
  if (emailExists) { throw new ErrorResponse(400, 'Email is already in use'); }

  // Generate encrypted password using bcryptjs
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  // Generate username
  let generatedUsername;
  let usernameExists = true;
  // It checks if generated username already exists
  // Usually run once but to certainly avoid duplicates
  while (usernameExists) {
    generatedUsername = generateUsername(this.name);
    usernameExists = await this.model('User').exists({
      username: generatedUsername,
    });
  }
  this.username = generatedUsername;

  // Create SocketUser
  const socketUser = await SocketUser.create({ user: this._id });
  this.socketId = socketUser._id;

  next();
});

UserSchema.post('save', async function (doc) {
  if (!this._wasNew) {
    return;
  };
  
  // Generate follow schema
  await this.model('Follow').create({
    user: doc._id
  });

});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ 
    id: this._id,
    name: this.name,
    username: this.username,
    avatar: this.avatar,
    role: this.role
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
