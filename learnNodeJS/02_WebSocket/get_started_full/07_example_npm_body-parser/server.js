var express = require('express');
var app = express();
var url = require('url')
var bodyParser = require('body-parser');


app.use('/public', express.static('public'));
app.set('view engine', 'ejs'); 

var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/index', function (req, res) {
		console.log(req.url);
		res.render('index', {});
});

app.post('/index', urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.render('index-success', {data: req.body});
});

app.get('/about', function (req, res) {
		console.log(req.url);
		res.render('about', {});

//		res.send('id: ' + req.query.id);
		
});


//const myURL = url.parse('/about')

app.listen(3000);
console.log('Server run...');




