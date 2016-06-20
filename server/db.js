var config = require('../knexfile').development
var knex = require('knex')(config)

module.exports = {
  getTravelInfo: getTravelInfo
}

function getTravelInfo() {
  return knex('trips')
    .then(function (trip) {
      console.log(trip);
      return trip
    })
}

// getTravelInfo()


// knex
