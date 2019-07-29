var http = require('http');
var fs = require('fs');
var server = http.createServer(function (require, response) {
	console.log("URL " + require.url);
	
	if (require.url === '/index' || require.url === '/') {
		response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/index.html').pipe(response);
	} else if (require.url === '/about') {
		response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/about.html').pipe(response);
	} else {
		response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/404.html').pipe(response);		
	}
 
});

server.listen(3000, '127.0.0.1'); 
console.log('Server run... \nhttp://127.0.0.1:3000');