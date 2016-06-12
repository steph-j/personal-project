var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var PORT = 3000
var app = express()

var routes = require('./routes');

// bodyParser makes req.body possible
app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('views', path.join(__dirname, 'views'))
app.get('/', routes.index)

app.listen(PORT, function () {
  console.log('Aliens are listening on port: ', PORT);
})
