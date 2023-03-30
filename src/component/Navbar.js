import React from 'react'
import logo from '../logo.svg'
const Navbar = () => {
  return (
    <nav class="navbar">
  <div class="navbar-left">
    <img src={logo} alt="Company Logo"/><h1>Company Name</h1>
  </div>
  <div class="navbar-middle">
    <form class="search-form">
      <input type="text" placeholder="Search..."/>
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
  <div class="navbar-right">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Overview</a></li>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Analytics</a></li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
