var app = require('express')();
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
var server = app.listen(PORT, function () {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;
 
  console.log('listening at http://%s:%s', host, port);
});