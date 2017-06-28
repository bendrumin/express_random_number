var express = require("express"); //brings in express
var app = express(); //runs a function
var randomNumber = require('./randomNumber.js');

// Routes (A string the browser uses)
app.get("/randomNumber", function(req, res){
    res.send({randomNumber: randomNumber(100, 10000000)});
});
// server static files
var path = require ("path");
app.get("/*", function(req, res) {  //function catches anything in the folder
  console.log('got a request!');

var file = req.params[0] || "/views/index.html";
res.sendFile(path.join(__dirname, "/public/", file));
//Aynything in public will come back as a request
});


// start up the server
app.listen(5000, function() {
  console.log('listening to port 5000');
});
