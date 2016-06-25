import { connect } from 'react-redux'

import Dest from '../components/Dest'
import {showDestination, receiveApi} from '../actions'
import {getTravelInfo} from '../api'

const mapStateToProps = (state) => {
  return{
    selectedDesination: state.selectedDesination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDestination: (id) => {
      // dispatch(actions.requestApi(data))
      // dispatch(getTravelInfo(receiveApi))
      dispatch(actions.showDestination(id))
  }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Dest)
