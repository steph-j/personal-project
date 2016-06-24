import {SHOW_DESTINATION} from './actions'

const INITIAL_STATE = {
  selectedDesination: null,
  destinations: [{
    id: 1,
    destination: 'Timbuktu',
    description: 'Choochoo'
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_DESTINATION:
      return Object.assign({}, state, {
        selectedDesination: state.destinations.filter((destination) => {
          return action.id === destination.id
        })[0]
      })
      return newState
    default:
    return state
  }
}
