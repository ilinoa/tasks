
var express = require('express');
var pg = require("pg");
var app = express();

var connectionString = "postgres://ilinoa:1234@localhost:5432/postgres";

app.get('/', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {


       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * FROM student where id = $1', [1],function(err,result) {
           done(); // closing the connection;
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });


       
    });
});

app.listen(3000, function () {
    console.log('Server is running.. on Port 3000');
});





/*
//https://node-postgres.com/features/connecting
const { Pool, Client } = require('pg')
const connectionString = 'postgres://ilinoa:1234@localhost:5430/postgres'
const pool = new Pool({
  connectionString: connectionString,
})
pool.query('SELECT * FROM student;', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT * FROM student;', (err, res) => {
  console.log(err, res)
  client.end()
})



*/



//http://www.javascriptpoint.com/nodejs-postgresql-tutorial-example/
/*
var express = require('express');
var pg = require("pg");
var app = express();
 
var connectionString = "postgres://postgresql:1234@localhost:5432/postgres";


app.get('/', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
    
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * FROM student where id = $1', [1],function(err,result) {
           done(); // closing the connection;
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
});
 
app.listen(3000, function () {
    console.log('Server is running.. on Port 3000');
});
*/






















/* 
// Пример создания базы данных
CREATE TABLE Student(
	id int not null,
	name text not null,
	rollnumber int not null
);
*/

/*
// Пример добавления данных
 INSERT INTO Student values(1,'Billy John',10001);
 INSERT INTO Student values(2,'Smith George',10002);
 INSERT INTO Student values(3,'Ernest Cook',10003);
 INSERT INTO Student values(4,'Marshall Ballard',10004);
 INSERT INTO Student values(5,'Joann Riley',10005);
 INSERT INTO Student values(6,'Pearl Pearson',10006);
 */

 /*
 // необходимо проинициализировать npm
	npm init

	npm install express pg --save
 */



/*
// postgres://dbusername:admin@localhost:5432/MyDB

postgres - протокол 
dbusername - База данных
admin - пароль
localhost - сервер
5432 - порт
*/
