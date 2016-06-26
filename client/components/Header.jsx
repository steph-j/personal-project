import React from 'react'

export default React.createClass({
  render() {
    return (
      <header>
        <div className="name">
          <h3>Travel Keeper</h3>
          <p>The perfect place to keep all of your plans</p>
        </div>

      <div className="login">
       <form action="/info" method="post">
       <input name="name" value="" placeholder="user name" />
       <button type="button" name="button">Sign In</button>
       </form>
       </div>
      </header>
    )
  }
})
