var http = require('http');
var express = require('express');

var port = process.env.PORT || 3000;

var app = express();

app.get('/', (request, response) => {
    response.sendFile('index.html',{root:__dirname});
})

app.listen(port, (request, response) => {
    console.log("Server Started");
})