import React from 'react'
import Header from './Header'

import api from '../api'

export default React.createClass({
  render() {
    return (
      <div>
    <Header />
    <div class="container">
    <div class="home">
    <div class="row">
    <a href="#"><div><h2>Past Trips</h2></div></a>
    </div>
    <div class="row">
    <a href="/destination"><div><h2>Current Trips</h2></div></a>
    </div>
    <div class="row">
    <a href="#"><div><h2>Future Trips</h2></div></a>
    </div>
    </div>
    </div>
      </div>
    )
  }
})
// <a href="#"><div><h2>Past Trips</h2></div></a>
// <a href="http://localhost:3000/destination"><div><h2>Current Trips</h2></div></a>
// <a href="#"><div><h2>Future Trips</h2></div></a>
