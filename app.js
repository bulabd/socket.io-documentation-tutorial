const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile('/home/bulat/lighthouse/socketio-tutorial/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('clientEvent', (data) => {
    console.log(data);
  });

  // setTimeout(() => {
  //   // socket.send('Sent a message 4 seconds after connection!');
  //   // socket.emit('testerEvent', { description: 'A custom event named testerEvent!' });
  // }, 4000);

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on PORT 3000');
});