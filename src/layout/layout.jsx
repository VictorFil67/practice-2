import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header>
        <nav>
            <NavLink to={`/`}>Home page</NavLink>
            <NavLink to={`/search`}>Search users</NavLink>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default Layout