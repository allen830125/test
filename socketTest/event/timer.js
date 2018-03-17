var moment = require('moment');

module.exports = function (io) {

    io.of("/timer").on('connection', function (socket) {
        console.log("hand shack");

        io.of("/timer").clients(function(error, clients){
            if (error) throw error;
            console.log(clients);
        });

        setInterval(function () {
            io.of("/timer").emit('data', {date: moment(new Date()).format("YYYY/MM/DD HH:mm:ss")});
        }, 3000);

        socket.on('disconnect', function(reason){
            io.of("/timer").clients(function(error, clients){
                if (error) throw error;
                console.log(clients);
            });
            console.log(reason);
        });
    });

};