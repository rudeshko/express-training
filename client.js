var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8081');

ws.on('open', function() {
    ws.send('something from client');
});

ws.on('message', function(message) {
    console.log('received: %s', message);
});

ws.on('close', function(message) {
    console.log("closed");
});