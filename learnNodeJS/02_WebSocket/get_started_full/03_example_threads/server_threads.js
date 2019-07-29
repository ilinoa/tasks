
/*

запись по частям write(chunk) в файл /news.txt из /book.txt
var fs = require('fs');
 
var myReadShort = fs.createReadStream(__dirname + '/book.txt');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');


// myReadShort.on('data', function (chunk) {
// 	console.log("Новые данные получены: ");
// 	myWriteShort.write(chunk);
// });

myReadShort.pipe(myWriteShort)

*/
//-------------------------------------------------------------------------------

var fs = require('fs');
 

// подключение к локальному серверу
var http = require('http');

var server = http.createServer(function (require, response) {
	console.log("URL " + require.url);

	if(require.url == '/'){
		response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
		var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
		myReadShort.pipe(response);
		
	}
	else if (require.url == '/json') {
	 	response.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
		var obj = {
			author: 'Lutz',
			book: 'python',
			path: 2 
		};
		response.end(JSON.stringify(obj));
	}
});

server.listen(3000, '127.0.0.1'); 
console.log('Server run... \nhttp://127.0.0.1:3000');