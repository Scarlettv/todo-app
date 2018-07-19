const express = require('express');
const app = express();
const toDoController = require('./controllers/toDoController');
const mysql = require('mysql');
const myDatabase= require('./db');



// settting templating engine
app.set('view engine','ejs');
//static file management
app.use(express.static('./public'));

//linking controller file

toDoController(app,myDatabase(mysql));

app.listen(3000);
console.log('You are listening to port 3000.');
