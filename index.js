var app = require('express')();
 
app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
var server = app.listen(3000, function () {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;
 
  console.log('listening at http://%s:%s', host, port);
});