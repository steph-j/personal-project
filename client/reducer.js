import {SHOW_DESTINATION} from './actions'

const INITIAL_STATE = {
  selectedId: null,
  destination: [{
    id: 1,
    destination: '',
    description: '',
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_DESTINATION:
      return Object.assign({}, state, {
        selectedId: action.id
      })
      return state
    default:
    return state
  }
}
