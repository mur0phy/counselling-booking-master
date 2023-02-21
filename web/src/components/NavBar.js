import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function NavBar({
  signOut,
  loadMyBookings,
  user
}) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/bookings" className="nav__link">View Worker Availability</Link></li>
        <li className="nav__item"><Link to="/mybookings" className="nav__link">My Bookings</Link></li>
        <li className="nav__item"><Link to={{pathname: "localhost:4000"}} target="localhost:4000" className="nav__link">Chatworker</Link></li>
        
        <li className="nav__item"><a onClick={signOut} className="nav__link">Logout</a></li>
      </ul>
    </nav>
  )
}

export default NavBar