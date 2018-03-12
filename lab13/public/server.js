var express = require('express');
var app = express();
var oneLinerJoke = require('one-liner-joke');
app.get('/', function(req, res){
 res.send("Hello world! by express");
});
app.get('/test', function(req, res){
 res.send("this is route 2");
});
app.get('/joke', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
   var randomJoke = oneLinerJoke.getRandomJoke();
   res.end(randomJoke.body);
});
app.get('/add', function(req, res){
var x = parseInt(req.query.x);
var y = parseInt(req.query.y);
 res.send("X + Y="+(x+y));
});
app.get('/calc', function(req, res){
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var op = req.query.op;

  if (op == 'add'){
  var result = (x+y);
  }
  if (op == 'sub'){
  var result = (x-y);
  }
  if (op == 'mult'){
  var result = (x*y);
  }
  if (op == 'div'){
  var result = (x/y);
  }
    res.send(String(result));
})
app.use(express.static('public'))
app.listen(8080);
