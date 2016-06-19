import request from 'superagent'
import db from '.db'

var travelUrl = 'http://localhost:3000/travel'

module.exports = {
  getInfo: getInfo
}
