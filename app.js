var express = require('express');
var app = express();
app.get('/', function(req, res)
{
	res.send('hello World');
});
app.get('/home', function(req, res)
{
	//console.log(req.query);
	res.send('i m on home page');
});
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
console.log('server started');