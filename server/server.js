var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var PORT = 3000
var app = express()

var routes = require('./routes');

// bodyParser makes req.body possible
app.use(bodyParser.json())

app.use(cors({
  origin: 'http://localhost:8080'
}))

app.use(express.static(path.join(__dirname, 'static')))
app.use('/', routes)


app.listen(PORT, function () {
  console.log('Aliens are listening on port: ', PORT);
})
