import { getTravelInfo } from './api'

export const REQUEST_DESTINATION = 'REQUEST_DESTINATION'
export const RECEIVE_DESTINATION = 'RECEIVE_DESTINATION'
export const SHOW_DESTINATION = 'SHOW_DESTINATION'

export const requestApi = (data) => {
  console.log('getting api');
  return (dispatch) => {
    data
    }
}

export function receiveApi (data) {
  console.log(data);
  return {
    type: RECEIVE_DESTINATION
  }
}

export function showDestination (id) {
  return {
    type: SHOW_DESTINATION,
    id: id
  }
}
