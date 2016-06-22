import { connect } from 'react-redux'

import Dest from '../components/Dest'
import {showDestination} from '../actions'

const mapStateToProps = (state) => {
  return{
    things: state.destination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestAPI: (id) => {
      dispatch(actions.requestAPI(id))
  }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Dest)
