import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h2>Navbar</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar