const http = require('http');
// Exampl page
const first = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<style> h1{ color:red;}</style>
		<meta charset="utf-8">
		<title>first</title>
	</head>
		<body>
			<h1>General page</h1>
		</body>
	</html>
`;
const second = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
	<style> h2{ color:green;}</style>
		<meta charset="utf-8">
		<title>two</title>
	</head>
		<body>
			<h2>two page</h2>
		</body>
	</html>
`;


http.createServer(function(req, res){
	console.log(req.url);
	console.log(req.method);
	res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8;'});
	if(req.url == '/'){
		res.end(first);
	}
	else if (req.url == '/about') {
		res.end(second);
	}
}).listen(3000); 