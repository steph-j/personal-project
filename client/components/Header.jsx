import React from 'react'

export default React.createClass({
  render() {
    return (
      <header>
      <h3>Travel Mania</h3>

      <div class="Login">
       <form action="/info" method="post">
       <input name="name" value="" placeholder="user name" />
       <button type="button" name="button">Sign In</button>
       </form>
       </div>
      </header>
    )
  }
})
