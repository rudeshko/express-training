var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("HTTP Server running at http://localhost:8080");
});

//Web Sockets
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8081});

console.log("Websocket Server running at http://localhost:8081");

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });

    ws.send('something from server');
});