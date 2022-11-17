import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top" id="mainNav">
      <div class="container px-4">
        <Link class="navbar-brand" to="/home">Home Page</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <Link className='btn btn-outline-light' to="/profile">My Profile</Link>
            </li>
            <li class="nav-item">
              <Link className='btn btn-outline-light' to="/user">User Details</Link>
            </li>
            <li class="nav-item">
              <Link className='btn btn-outline-light' to="/login">Login</Link>
            </li>
          </ul>
        </div>
        </div>

    </nav>
  )
}
