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
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

// Run server
const PORT = process.env.PORT || 3000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Load SocketIO
// const io = require('./middleware/sockets').listen(server);
// app.use((req, res, next) => {
//   req.io =  require('./middleware/sockets').listen(server, req, res, next);
//   next();
// });
// const socketio = require('./routes/socketio');
// app.use('/socketio', (req, res, next) => {
//   console.log('socketiooo')
//   req.server = server;
// } ,socketio)

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    next();
  }, morgan('dev'));
}

// Set Static Folder
// To access angular code we need to do this
app.use(express.static(path.join(__dirname, '..', 'dist', 'social-media')));
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/api', routes);

// Route for images
app.use('/:filetype/:filename', (req, res, next) => {
  const allFileTypes = {
    a: 'avatars',
    p: 'posts'
  };
  const filetype = allFileTypes[req.params.filetype];
  const filename = req.params.filename;

  const filepath = path.join(__dirname, 'public', filetype, filename);

  fs.open(filepath, 'r', (err, file) => {
    if (err) {
      const defaultImg = path.join(__dirname, 'public', 'default', 'imageNotFound.png');
      res.sendFile(defaultImg);
    }
    else {
      res.sendFile(filepath);
    }
  });

  // fs.exists(filePath, (exists) => {
  //   if (exists) {
  //     res.sendFile(filePath);
  //   } else {
  //     const defaultImg = path.join(__dirname, 'public', 'avatars', 'imageNotFound.png');
  //     res.sendFile(defaultImg);
  //   }
  // });
});

// Index route
app.get('*', (req, res) => {
  const pathAngular = path.join(__dirname, '..', 'dist', 'social-media', 'index.html');
  console.log(pathAngular)
  res.sendFile(pathAngular);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
