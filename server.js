//install modules ==========================
var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');

// require your model(s) here

// Configuration to database
// var db = require('./config/db.js')

mongoose.connect('mongodb://localhost/shortly'); // connect to mongo database named shortly

//set our port
var port = process.env.PORT || 8000;

// app.use(bodyParser.json());

// app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

//app routes go here ========================
// require("./app/models")(app, express)

//start server ==============================
app.listen(port);
console.log("Port "+ port + "is live");


module.exports = app;
