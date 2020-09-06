const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const fileupload = require('express-fileupload');
const fs = require('fs');

// Load env vars
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to database
connectDB();

// Route index
const routes = require('./routes/index');

// Load express
const app = express();

// Body parser
app.use(express.json({ limit: '20MB' }));

// Enable CORS
app.use(cors());

// // File upload (testing...)
// app.use(fileupload());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.dir(req.ip);
    next();
  }, morgan('dev'));
}

// Set Static Folder
// To access angular code we need to do this
app.use(express.static(path.join(__dirname, '..', 'dist', 'social-media')));
app.use(express.static(path.join(__dirname, 'public')));


// Route for images
app.use('/a', (req, res, next) => {
  console.log(req.url);
  const fileName = path.join(__dirname, 'public', 'avatars', req.url);
  fs.exists(fileName, (exists) => {
    const defaultImg = path.join(__dirname, 'public', 'avatars', 'imageNotFound.png');
    if (exists) {
      res.sendFile(fileName);
    } else {
      res.sendFile(defaultImg);
    }
  });
});

// Mount routes
app.use('/api', routes);

// Index route
app.get('*', (req, res) => {
  const pathAngular = path.join(__dirname, '..', 'dist', 'social-media', 'index.html');
  console.log(pathAngular)
  res.sendFile(pathAngular);
});

// Run server
const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
