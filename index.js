var http = require('http');
var express = require('express');

var port = process.env.port || 3000;

var app = express();

app.get('/', (request, response) => {
    res.sendFile('index.html',{root:__dirname});
})

app.listen(port, (request, response) => {
    ;
})