var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use('/public', express.static('public'));
app.set('view engine', 'ejs'); 

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/', urlencodedParser , function (require, respose) {
	if(require.url == '/' || require.url == '/index'){
		console.log(require.url);
		respose.render('index', {});
	}
	else if (require.url == '/about') {
		console.log(require.url);
		respose.render('about', {});
	}
	else {
		console.log(require.url);
		respose.render('404', {});
	}
});



// app.get('/index', function (require, respose) {
// 		console.log(require.url);
// 		respose.render('index', {});
// 	});
// app.post('/index', urlencodedParser, function (require, respose) {
// 	if (!require.body) {return respose.sendStatus(400);}
// 	console.log(require.url);
// 	respose.render('index-success', {});
// });

// app.get('/about', function (require, respose) {
// 		console.log(require.url);
// 		respose.render('about', {});
// });


app.listen(3000);
console.log('Server run...');