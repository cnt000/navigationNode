var express = require('express');
var request = require('request');

var app = express();
app.use('/proxy', function(req, res) { 
  var url = req.url.replace('/?url=','');
  req.pipe(request(url)).pipe(res);
});
app.use(express.static('public'));

app.listen(process.env.PORT || 3000);