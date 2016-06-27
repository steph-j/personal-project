import { connect } from 'react-redux'

import Info from '../components/Info'
import {showDestination, receiveApi, requestApi} from '../actions'
import {getTravelInfo} from '../api'

const mapStateToProps = (state) => {
    return{
    selectedDesination: 'selectedDesination'
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     requestApi: (data) => {
//       dispatch(actions.requestApi(data))
//     },
//     getTravelInfo: (selectedDesination) => {
//       dispatch(getTravelInfo(receiveApi))
//     },
//     showDestination: (id) => {
//       // dispatch(actions.requestApi(data))
//       dispatch(actions.showDestination(id))
//     }
//   }
// }

export default connect (
  mapStateToProps
  // mapDispatchToProps
)(Info)
