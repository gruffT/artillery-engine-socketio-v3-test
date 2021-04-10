const port = 4005;
const io = require('socket.io')(port);
io.on('connection', (socket) => {
  console.log('default conn', socket.handshake.headers);
  socket.on('ping', data => {
    socket.emit('pong', { respPayload: data.payload });
  });
  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
});
io.of('/nsp').on('connection', (nspsocket) => {
  console.log('nsp conn',nspsocket.handshake.headers);
  nspsocket.on('ping', data => {
    nspsocket.emit('pong', { respPayload: data.payload });
  });
  nspsocket.on('disconnect', () => {
    console.log('Disconnected');
  });
});
console.log('Test server running on port: ', port);
