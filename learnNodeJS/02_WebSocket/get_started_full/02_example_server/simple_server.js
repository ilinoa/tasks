var http = require('http');

var server = http.createServer(function (require, response) {
	console.log("URL " + require.url);
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('HW');
});

server.listen(3000, '127.0.0.2'); 
console.log('Server run... \nhttp://127.0.0.2:3000');