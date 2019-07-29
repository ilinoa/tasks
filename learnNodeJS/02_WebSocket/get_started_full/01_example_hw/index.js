// движок v8
console.log("hello world!!!")
 		
// путь местонахождения директории 
// C:\Users\Oleg\Documents\git\tasks\learnNodeJS\02_WebSocket\get_started_full\01_example_hw
console.log(__dirname);

// включая сам файл 
// C:\Users\Oleg\Documents\git\tasks\learnNodeJS\02_WebSocket\get_started_full\01_example_hw\index.js
console.log(__filename);		

//------------------------------------------------------------------------------------------------

// подлючение модулей

var array = require('./array');

console.log(array([1,2,3,4,5,6,7,8,9]));
//------------------------------------------------------------------------------------------------

// шаблонная функция
var things = require('./things');
console.log(things.value);
console.log(things.multiplay(5, 9));

//------------------------------------------------------------------------------------------------

// отслеживание событий
var events = require('events');
 
var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(simple_text) {
	console.log(simple_text);
});

myEmit.emit('some_event', 'обработчик событий сработал!');


//------------------------------------------------------------------------------------------------

// обработчик событий для объекта

var util = require('util');

var Book = function(author) {
	this.author = author;
}

util.inherits(Book, events.EventEmitter);

var lutz = new Book('Lutz');
var schildt = new Book('Schildt');
var gamma = new Book('Gamma');

var books = [lutz, schildt, gamma];

books.forEach(function(book){
	book.on('pages', function(text){
		console.log('for example');
		console.log(book.author + " pages is " + text);
	})
});

lutz.emit('pages', '300');
schildt.emit('pages', '350');
gamma.emit('pages', '400');



