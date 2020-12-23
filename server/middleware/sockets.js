/**
 * TODO
 */
const socketio = require('socket.io');
const User = require('../models/User');
const SocketUser = require('../models/SocketUser');
const { verifyToken, authorize } = require('../middleware/protect');

module.exports.listen = (server, req, res, next) => {
    io = socketio.listen(server)

    io.on('connection', async socket => {
      req.verifySkip = true;
      await verifyToken(req, res, next);

      socket.emit('connected', { sucess: true, socketId: socket.id });

      socket.on('message', socketId => {
        io.to(socket.id).emit('message', { count: 32 })
      });


      socket.on('everybody', socketId => {
        io.emit('everybody', socketId)
      });
    });

    return io
};