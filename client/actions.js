import request from 'superagent'

export const SHOW_DESTINATION = 'SHOW_DESTINATION'
export const REQUEST_DESTINATION = 'REQUEST_DESTINATION'

export const requestApi = (id) => {
  return (dispatch) => {
    const target = `http://localhost:3000/trips`
    request.get(target, (err, data) => {
      if (err) console.log(err);
      console.log('target', target);
      const destinationInfo = JSON.parse(data.text).map ()
    })
  }
}


export const showDestination(id) {
  return {
    type: SHOW_DESTINATION,
    id: id
  }
}
