// sockets.js
const socketio = require('socket.io');
const User = require('../models/User');
const SocketUser = require('../models/SocketUser');
const { verifyToken, authorize } = require('../middleware/protect');

module.exports.listen = (server, req, res, next) => {
    io = socketio.listen(server)

    io.on('connection', async socket => {
      req.verifySkip = true;
      await verifyToken(req, res, next);

      if (req.user) {
        console.log(req.user.username);
      }
      // console.log('Connection >', socket.id);
      // console.log('Tenemos req')
      socket.emit('connected', { sucess: true, socketId: socket.id });



      socket.on('message', socketId => {
        console.log('client id >', socketId);
        io.to(socket.id).emit('message', { count: 32 })
      });


      socket.on('everybody', socketId => {
        console.log('client id >', socketId);
        io.emit('everybody', socketId)
      });
    });

    return io
};