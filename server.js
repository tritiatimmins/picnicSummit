//install modules ===========================
var express = require('express');
var app 	= express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// require your model(s) here

// Configuration to database
// var db = require('./config/db.js')

//set our port
var port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(express.bodyParser())
app.use(express.static(__dirname + '/public'));

//app routes go here


//start server ==============================
app.listen(port);
console.log("Port "+ port + "is live");


module.exports = app;