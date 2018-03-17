var moment = require('moment');

module.exports = function (io) {

    let chat = io.of("/chat");
    let room = "";

    chat.on('connection', function (socket) {
        let clientTime = socket.handshake.query.clientTime;
        console.log(clientTime);
        socket.on('room', function(data){
            room = data.room;
            socket.join(room);
        });
        socket.on('message', function (data) {
            var userName = data.name || "anonymous";
            chat.to(room).emit('message', data);
        });
    });
};

