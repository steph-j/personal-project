module.exports = {
  getTravelInfo: getTravelInfo
}

var info = [{
  flights: 'NZ001 AKL LAX 2300 1001',
  passport: '15-05-2015',
  dates: '15 Jan 2016 - 27 Jan 2016',
  length: 'No',
  visa: '7 days',
  temps: '30C'
}]

function getTravelInfo() {
  return info
}

// knex
