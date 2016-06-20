var express = require('express');
var router = express.Router()
  // to create a modular, mountable route handler. Means

var db = require('./db');

router.get('/', function (req, res) {
  res.send('index.html')
})

router.get('/trips', function (req, res) {
  db.getTravelInfo()
    .then(function (result) {
      res.json(result)
    })
})

module.exports = router
