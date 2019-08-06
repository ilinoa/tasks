var express = require('express');
var app = require();
var server = require('http').createServer(app);
var io = require('server.io');

server.listen(3000);

app.get('/', function(req, res) {
	res.sendFile(__dirname + 'index.html');
})






