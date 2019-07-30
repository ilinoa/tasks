var express = require('express');
var app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.get('/index', function (require, respose) {
	respose.render('index', {});
});

app.get('/about', function (require, respose) {
	respose.render('about', {});
});

app.listen(3000);
console.log('Server run...');