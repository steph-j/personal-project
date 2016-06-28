import React from 'react'
import {Link} from 'react-router'

import Header from './Header'
import DestinationContainer from '../container/DestinationContainer'
import InfoContainer from '../container/InfoContainer'




export default React.createClass({
  render() {
    return (
    <div>
      <Header />
      <Link to="dest"><button>Current Trip</button></Link>
      <button>Past Trips Trip</button>
      <button>Future Trips</button>
      {this.props.children}
    </div>
    )
  }
})
