import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import {showDestination, requestApi, receiveApi} from './actions'
import App from './components/App'
import Dest from './container/DestinationContainer'
import Info from './container/InfoContainer'
// import Expenses from './container/ExpensesContainer'
import reducer from './reducer'

let store = createStore(
  reducer, compose(
 applyMiddleware(thunk),
 window.devToolsExtension ? window.devToolsExtension() : f => f
 )
)

document.addEventListener('DOMContentLoaded', () => {
  render (
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    <Route path='dest' component={Dest} >
      <Route path='info' component={Info}/>
    </Route>
    </Route>
  </Router>
</Provider>,
document.getElementById('App')
  )
 })
