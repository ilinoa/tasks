//Use template
// Шаблонизатор  EJS
// для примера устанавливается так: npm install ejs
// https://ejs.co/#install

var express = require('express');

var app = express();

var test = 1000;

//подключение движка ejs
app.set('view engine', 'ejs');

app.get('/', function (require, respose) {
	respose.render('index', { titles: test});
});

app.get('/docs', function (require, respose) {
	respose.render('404', {});
});


// for example:  		http://127.0.0.1:3000/about/ver
app.get('/about/:ver', function (require, respose) {
	respose.render('about', {aboutVer: require.params.ver});
});


app.listen(3000);
console.log('Server run...');