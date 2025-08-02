import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/navbar.jsx'
import Footer from '../footer/footer.jsx'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;