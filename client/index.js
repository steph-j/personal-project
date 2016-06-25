import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ReduxThunk } from 'redux-thunk'
import thunk from 'redux-thunk'
import {showDestination, requestApi, receiveApi} from './actions'

import App from './components/App'

import reducer from './reducer'

let store = createStore(
  reducer,
 applyMiddleware(thunk)
)

// function dispatchAndLog(store, action) {
//   console.log('dispatching', action)
//   store.dispatch(action)
//   console.log('next state', store.getState())
// }
//
// dispatchAndLog(store, requestApi(data))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
   , document.getElementById('App'))
