var express = require('express');
var app = express();
app.use('/javaScript', express.static(__dirname + '/app/javascript'));
app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/css', express.static(__dirname + '/app/css'));
app.use('/template', express.static(__dirname + '/app/template'));
app.use('/', express.static(__dirname + '/'));
app.get('/', function (req, res) {
res.sendfile(__dirname + '/app/index.html');
});

var fs = require('fs');
var obj;
fs.readFile('posts.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(data);
});

app.listen(8080);