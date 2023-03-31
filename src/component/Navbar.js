import React from 'react'
import logo from './icons/logo.svg'
import profile from './icons/profile.svg'
import { FaAdn } from "react-icons/fa";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          {/* <img src={logo.svg} alt="Company Logo" className="navbar-logo" /> */}
          <FaAdn />
          <span className="navbar-company">ORION</span>
        </div>
        <div className="navbar-middle">
          <div className="navbar-search">
            <input type="text" placeholder="Search" className="navbar-search-input" />
            <i className="fa fa-search navbar-search-icon"></i>
          </div>
        </div>
        <div className="navbar-right">
          <a href="#" className="navbar-item">Statistics</a>
          <a href="#" className="navbar-item">Overview</a>
          <a href="#" className="navbar-item">Dashboard</a>
          <a href="#" className="navbar-item">Analytics</a>
      
          <a href="#" className="navbar-item"><Person2OutlinedIcon/></a>
          <a href="#" className="navbar-item"><SettingsIcon/></a>
          </div>
      </nav>
    </div>

  )
}

export default Navbar
