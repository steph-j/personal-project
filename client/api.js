import request from 'superagent'

var travelUrl = 'http://localhost:3000/trips'

module.exports = {
  getTravelInfo: getTravelInfo
}

function getTravelInfo(callback) {
  request
    .get(travelUrl)
    .end(function (err, res) {
      if (err) {
        console.log(err);
      } else {
        callback(null, res.body)
        // console.log(res.body);
      }
    })
}
