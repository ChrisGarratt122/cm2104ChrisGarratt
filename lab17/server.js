// server.js
// load the things we need
var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
// // index page
// app.get('/', function(req, res) {
// res.render('pages/index');
// });
// index page
app.get('/', function(req, res) {
 var drinks = [
 { name: 'Bloody Mary', drunkness: 3 },
 { name: 'Martini', drunkness: 5 },
 { name: 'Scotch', drunkness: 10 }
 ];
 var tagline = "Any code of your own that you haven't looked at for more than six months might as well have been written by someone else.";
 res.render('pages/index', {
 drinks: drinks,
 tagline: tagline
 });
});
// about page
app.get('/about', function(req, res) {
 res.render('pages/about');
});
app.listen(8080);
console.log('8080 is the magic port');
