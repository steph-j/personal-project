import React from 'react'

export default (props) => {
  return (
<div className='destination'>
  <h1>You're nearly on your way to: {props.selectedDesination.destination}</h1>

  <p>{props.selectedDesination.description}</p>

  <div class="container">
    <div class="destination-menu">
    <div class="row">
      <div class="six columns">
        <a href="#"><h3>Important Info</h3></a>
      </div>
      <div class="six columns">
        <a href="#"><h3>Expenses!</h3></a>
      </div>
    </div>
    <div class="row">
      <div class="six columns">
        <a href="#"><h3>Packing List</h3></a>
      </div>
      <div class="six columns">
        <a href="#"><h3>Uploaded Photos</h3></a>
      </div>
    </div>
    </div>
  </div>

</div>
)
}
