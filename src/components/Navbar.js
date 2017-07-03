import React from 'react'

class Navbar extends React.Component {
  render(){
    return(
      <div>
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item is-tab is-hidden-mobile is-active" href="/">Home</a>
            <a className="nav-item is-tab is-hidden-mobile" href="/tasks">Tasks</a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab">
              Profile
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
