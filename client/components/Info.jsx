import React from 'react'

export default (props) => {
  return (
<div>
<h1>Important Info</h1>


{/*}<p>Destination: {props.selectedDesination.destination} </p>
<p>Flight Details: {props.selectedDesination.flights} </p>
<p>Passport Exp: {props.selectedDesination.passport} </p>
<p>Dates: {props.selectedDesination.dates} </p>
<p>Length of Stay: {props.selectedDesination.length} </p>
<p>Visa Required: {props.selectedDesination.visa} </p>
<p>Insurance Policy Number: {props.selectedDesination.insurance} </p>
<p>Hotel: {props.selectedDesination.hotel} </p>
<p>Tour: {props.selectedDesination.tour} </p>
<p>Expected Temperature: {props.selectedDesination.temps} </p>
<p>Expenses: {props.selectedDesination.expenses} </p>*/}

  <form>
     <input  type="text" name="id" value="" />
     <button>Update Information</button>
  </form>

</div>
)}
