import React, { useState } from 'react'
import { Link , NavLink }  from 'react-router-dom'
import style from './navbar.module.css'

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className={`${style.navbar} navbar navbar-expand-lg navbar-dark fixed-top`}>
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold fs-2 text-white">
          START FRAMEWORK
        </NavLink>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link fw-bold">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link fw-bold">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link fw-bold">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;