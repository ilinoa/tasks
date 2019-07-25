const http = require('http');
  	
  	
	// console.log(req.url);
	// console.log(req.method);
	// console.log(req.headers);
	const html = `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8">
				<title>Start server</title>
				<link rel="stylesheet" href="app.css">
			</head>
			<body>
				<h1> Hello world! </h1>
				Привет!
				<button>Click me</button>
				<script src="app.js"></script>
			</body>
		</html>
	`;
	const css = `
		body {
			margin: 0;
			padding: 0;
			text-align: center
		}
		h1 {
			background-color: #43853d;
			color: white;
			padding: .5em;
			font-family: 'Consolas';
		}
	`;
	const js = `
		const button = document.querySelector('button');
		button.addEventListener('click', event => alert('Node.js в действии'));
	`;

	http.createServer('request', (req, res) =>{ 
		switch (req.url) {
			case '/':
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(html); 
			case '/app.css':
				res.writeHead(200, {'Content-Type': 'text/css'});
				res.end(css); 
			case '/app.js':
				res.writeHead(200, {'Content-Type': 'text/javascript'});
				res.end(js); 
			default:
				res.writeHead(404, {'Content-Type': 'text/plain'});
				res.end('404 page not found');
		}
		console.log(req.url);


}).listen(3000, () => console.log('Server run'));