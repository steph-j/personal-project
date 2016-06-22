
import React from 'react'


export const home = () => (
<div>
  <a href="#"><div><h2>Past Trips</h2></div></a>
  <button onClick={() => {
    props.showDestination(id)
  }}>
    <h2>Current Trips</h2>
  </button>
  <a href="#"><div><h2>Future Trips</h2></div></a>
</div>
)
