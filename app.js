var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var path = require('path');
var bodyParser = require('body-parser');
var moment = require('moment');
var port = 1780;
var io = require('socket.io')(server, {
    pingInterval: 10000,
    pingTimeout: 5000,
    path: '/socketTest',
    serveClient: false,
    origins: 'http://localhost:1780'
});
var apiRouter = require("./route/api");

//socket設定,初始化io event

require("./socketTest/socketEvent")(io);

//views中ejs檔案的路徑設定
app.set('views', path.join(__dirname, 'public/views'));

app.set('view engine', 'ejs');

app.set('port', process.env.PORT || port);
//靜態檔案和middleware的路徑設定
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//routers 的設定
app.get('/', function (req, res) {
    res.render('index');
});
app.use("/api", apiRouter);

server.listen(port, function () {
    console.log('Express server listening on port ' + app.get('port'));
});