import { connect } from 'react-redux'

import Dest from '../components/Dest'
import {showDestination} from '../actions'

const mapStateToProps = (state) => {
  return{
    selectedDesination: state.selectedDesination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDestination: (id) => {
      dispatch(actions.showDestination(id))
  }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Dest)
