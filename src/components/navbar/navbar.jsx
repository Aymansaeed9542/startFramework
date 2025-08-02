import React from 'react'
import { Link , NavLink }  from 'react-router-dom'
import style from './navbar.module.css'
const Navbar = () => {

  return (
  <nav className={`${style.navbar} ${style.flex}`}>
    <div className={style}>
      <h2><NavLink to="/" className={style.navbarLink}>START FRAMEWORK</NavLink></h2>
    </div>
    <div>
      <ul className={style.navbarList}>
        <li>
          <NavLink to="/about" className={style.navbarLink}>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={style.navbarLink}>PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={style.navbarLink}>CONTACT</NavLink>
        </li>
        
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;