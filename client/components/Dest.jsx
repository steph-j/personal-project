import React from 'react'
import { Link }from 'react-router'

export default (props) => {
  return (
<div className='destination'>
  <h1>You're nearly on your way to: {props.selectedDesination.destination}</h1>

  <p>{props.selectedDesination.description}
  </p>

  <div className="nav">
    <div>
        <Link to="dest/info" ><button>Important Info</button></Link>
    </div>
    <div>
        <a href="#"><button><p>Expenses!</p></button></a>
    </div>
  </div>
  <div className="nav">
        <a href="#"><button><p>Packing List</p></button></a>
        <a href="#"><button><p>Uploaded Photos</p></button></a>
  </div>

  {props.children}
</div>
)
}
