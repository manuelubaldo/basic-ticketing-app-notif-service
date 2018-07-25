const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    origins:'*:*'
});

const port = 3001;

server.listen(port);

// app.get('/',function(req, res) {
//     res.send('Hello World');
// })

io.on('connection', function(socket){
    console.log("connected");

    socket.on('created',function(ticket) {
        console.log(`created`);
        io.sockets.emit('created',ticket);
    })

    socket.on('updated',function() {
        console.log(`updated`);
        io.sockets.emit('updated');
    })
})

