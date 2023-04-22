import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" style={{background : "violet"}}>
  <Link className="navbar-brand" to="#">Fetching Different APIs</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active mx-5">
        <Link className="nav-link" to='/'>First API <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item mx-5">
        <Link className="nav-link" to="/api2">Second API</Link>
      </li>
      <li className="nav-item mx-5">
        <Link className="nav-link" to="/api3">Third API</Link>
      </li>
      <li className="nav-item mx-5">
        <Link className="nav-link" to="/api4">Fourth API</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar