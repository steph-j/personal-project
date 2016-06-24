import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import {showDestination} from './actions'

import App from './components/App'

import reducer from './reducer'

let store = createStore(
  reducer
)

store.dispatch(showDestination(1))
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
   , document.getElementById('App'))
