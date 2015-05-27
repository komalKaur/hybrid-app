var express = require('express');
var jade = require('jade');
var app = express();
var path = require('path');
app.set('view engine', 'jade');
app.set('views', './app/server/views')
app.use(express.static(path.join(__dirname, 'app/public')));
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var server = app.listen(3000);


