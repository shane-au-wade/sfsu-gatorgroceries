const socket = require('socket.io');
const io = socket();  
let users = []
let connections = []


//  io
//  .of('/sensors')
//  .on('connection', socket => {
//        connections.push(socket)
//        console.log('Connected: %s sockets connected', connections.length);

//      // Disconnect
//      socket.on('disconnect', function(data){
//         //users.splice(users.indexOf(socket.username), 1);
//         //updateUsernames();
//         connections.splice(connections.indexOf(socket), 1);
//         console.log('Disconnected: %s socket connected', connections.length)
//     });

//     //test events
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//     console.log(data);
//     });

//   })

  io
 .of('/event-checkin')
 .on('connection', socket => {
   console.log('incoming socket id: ', socket.id)
       connections.push(socket)
       console.log('Connected: %s sockets connected', connections.length);


    socket.on("join-room", (event_id) => {
        console.log('joing room: ', event_id)
        socket.join(event_id)
    });

     // Disconnect
     socket.on('disconnect', function(data){
        //users.splice(users.indexOf(socket.username), 1);
        //updateUsernames();
        socket.leaveAll();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s socket connected', connections.length)
    });

    //test events
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
    console.log(data);
    });

  })

  module.exports = io;