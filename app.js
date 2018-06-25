var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Everyone! Jenkins CI Testing in progress...');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});