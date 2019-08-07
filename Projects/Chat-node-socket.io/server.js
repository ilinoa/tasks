var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var bodyParser = require('body-parser');
app.use('/public', express.static('public'))

app.set('view engine', 'ejs', 'js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

server.listen(3000)

app.get('/', function (req, res) {
		console.log(req.url)
		res.render('start', {})
})

users = [] // хранит всех пользователей с которыми есть соединение
connections = [] // помещяем сюда все подключения на текущий момент


/*
*		io.sockets.on - отслеживает 'connection' и вызывает  function, 
*		которая содержит объект socket. 
* 		.push(socket) - добавление в массив connections
*		.splice(connections.indexOf(socket), 1) - на ходит индекс 
*		объекта и удаляет 1 элемент
*/		 
io.sockets.on('connection', function(socket) {
	console.log('connect new user')
	connections.push(socket)

	socket.on('disconnect', function(data){
		console.log('user disconnected')
		connections.splice(connections.indexOf(socket), 1)
	})
})



console.log('Server run, port 3000')