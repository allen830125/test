var moment = require('moment');

module.exports = function (io) {

    io.of("/chat").on('connection', function (socket) {
        socket.on('message', function (data) {
            var userName = data.name || "anonymous";
            io.of("/chat").emit('message', data);
        });
    });
};

