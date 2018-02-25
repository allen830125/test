var moment = require('moment');

module.exports = function (io) {

    io.of("/timer").on('connection', function (socket) {
        console.log("hand shack");
        setInterval(function () {
            io.of("/timer").emit('data', {date: moment(new Date()).format("YYYY/MM/DD HH:mm:ss")});
        }, 3000);
    });

};