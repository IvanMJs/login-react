var express = require('express');
var app = express();

app.get('/asd', function (req, res) {
  res.send('Hello World!');
});

app.listen(32470, function () {
  console.log('Example app listening on port 3000!');
});
 
