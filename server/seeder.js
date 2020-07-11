const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

console.log('working')

// Load env vars
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Load models
const User = require('./models/User');
const Post = require('./models/Post');

// Connect to DB
connectDB();

// Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);
const posts_origin = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/posts_origin.json`, 'utf-8')
);

const importUsers = async () => {
  try {
    await User.create(users);
    console.log('Data imported...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
const importPostsOrigin = async () => {
  try {
    await Post.create(posts_origin);
    console.log('Data imported...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();
    console.log('Data destroyed...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Populate
const populatePosts = async () => {
  try {
    const data = await Post.find({}).populate('owner', 'name username');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

const personalized = async () => {
  try {
    const data = await Post.find({}).populate('owner', 'name username');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}


if (process.argv[2] === '--i-user') {
  importUsers();
} else if (process.argv[2] === '--i-post-origin') {
  importPostsOrigin();
} else if (process.argv[2] === '-d') {
  deleteData();
} else if (process.argv[2] === '-populate') {
  populatePosts();
} else if (process.argv[2] === '-pers') {
  personalized();
}
