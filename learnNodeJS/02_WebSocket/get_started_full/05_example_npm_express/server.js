/*
для установки npm package пример: npm install express
для удаления npm package пример: npm uninstall express

для создания package.json необходимо ввести npm init
если необходимо добавить в существующий проект библиотеки пример: npm install 
(все остальные пакеты установятся автоматический из пакета package.json)
*/

var express = require('express');

var app = express();

//app.get
//app.post

app.get('/', function (require, respose) {
	respose.send('This is home');
});

app.listen(3000);
console.log('Server run...');