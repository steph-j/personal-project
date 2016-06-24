import React from 'react'
import Header from './Header'
import DestinationContainer from '../container/destinationContainer'



export default React.createClass({
  render() {
    return (
      <div className="app">
    <Header />
    <DestinationContainer />
    </div>
    )
  }
})
