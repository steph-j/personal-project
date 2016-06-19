var config = require('../knexfile').development
var knex = require('knex')(config)

module.exports = {
  getTravelInfo: getTravelInfo
}

function getTravelInfo() {
  knex('trips')
    .select()
    .then(function (info) {
      info = {
        info: info
      }
      console.log(info);
    })
}

getTravelInfo()


// knex
