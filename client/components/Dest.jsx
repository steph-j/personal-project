import React from 'react'

export default (props) => {
  return (
<div className='destination'>
  <h1>You're nearly on your way to: Paradise {props.selectedDesination.destination}</h1>

  <p>{props.selectedDesination.description}

  Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.


</p>

  <div className="nav">
        <a href="#" onClick={() => props.showDetails(selectedDesination.destination.id)}><h3>Important Info</h3></a>
        <a href="#"><h3>Expenses!</h3></a>
  </div>
  <div className="nav">
        <a href="#"><h3>Packing List</h3></a>
        <a href="#"><h3>Uploaded Photos</h3></a>
  </div>
</div>
)
}
