import { getTravelInfo } from './api'

export const SHOW_DESTINATION = 'SHOW_DESTINATION'
export const REQUEST_DESTINATION = 'REQUEST_DESTINATION'
export const RECEIVE_DESTINATION = 'RECEIVE_DESTINATION'

export const requestApi = (data) => {
  return (dispatch) => {
    console.log('getting api');
    }
}

export function receiveApi (data) {
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
