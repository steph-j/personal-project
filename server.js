var path = require('path');
var express = require('express');
var hbs = require('express-handlebars')
var bodyParser = require('body-parser');

var PORT = 3000
var app = express()

var routes = require('./routes');

// bodyParser makes req.body possible
app.use(bodyParser.urlencoded({
  extended: true
}))

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.get('/', routes.index)
app.get('/destination', routes.destination)
app.get('/info', routes.info)
app.get('/expenses', routes.expenses)

app.listen(PORT, function () {
  console.log('Aliens are listening on port: ', PORT);
})
