var express = require('express');
var pg = require('pg');
var app = express();

var connectionString = 'postgres://ilinoa:1234@localhost:5430/todo';

const client = new pg.Client(connectionString);

client.connect(function(error) {
	//callback
	if (!!error) { console.log('Error'+ error.message); }
	else {  console.log('Connected'); } 
});


app.get('/', function(require, response) {
	// about postgresql
	client.query("SELECT * FROM users", function(error, rows) {
		// callback
		if (!!error) {
			console.log('Error in the query');
		} else {
			// parse wiyh your rows/fields
			console.log('Successful query');
			console.log(rows.name);
			response.json(rows);
		}
 	});
});

app.listen(3000);





/*
CREATE TABLE users(
  name VARCHAR(20),
  age SMALLINT
);


INSERT INTO users values('Billy John', 23);
INSERT INTO users values('Smith George', 23);
INSERT INTO users values('Ernest Cook', 34);
INSERT INTO users values('Marshall Ballard', 35);
INSERT INTO users values('Joann Riley', 26);
INSERT INTO users values('Pearl Pearson', 43);
*/