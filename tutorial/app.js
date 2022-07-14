const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile('/home/bulat/lighthouse/socketio-tutorial/tutorial/index.html');
});

let roomno = 1;
io.on('connection', function(socket){
  socket.join("room-"+roomno);
  io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);
})

// const nsp = io.of('/my-namespace');
// nsp.on('connection', (socket) => {
//   console.log('someone connected');
//   nsp.emit('hi', 'Hello everyone!');
// })

let clients = 0;

// io.on('connection', (socket) => {

//   // clients++;

//   // socket.emit('newclientconnect', { description: 'Hey, welcome!' });
//   // socket.broadcast.emit('newclientconnect', { description: clients + ' clients connected!' });

//   // io.sockets.emit('broadcast', { description: clients + ' clients connected!' });

//   // socket.on('clientEvent', (data) => {
//   //   console.log(data);
//   // });

//   // setTimeout(() => {
//   //   // socket.send('Sent a message 4 seconds after connection!');
//   //   // socket.emit('testerEvent', { description: 'A custom event named testerEvent!' });
//   // }, 4000);

//   // socket.on('disconnect', () => {
//   //   // console.log('A user disconnected');

//   //   clients--;

//   //   socket.broadcast.emit('newclientconnect', { description: clients + ' clients connected!' });

//   //   // io.sockets.emit('broadcast', { description: clients + ' clients connected!' });
//   // });
// });

http.listen(3000, () => {
  console.log('listening on PORT 3000');
});