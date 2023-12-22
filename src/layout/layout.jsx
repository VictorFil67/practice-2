import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from './layout.styled'

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Nav to={`/`}>Home page</Nav>
          <Nav to={`/search`}>Search users</Nav>
          <Nav to={`/todo`}>Todo</Nav>
          <Nav to={`/create/todo`}>CreateTodo</Nav>
          <Nav to={`/products`}>Products</Nav>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Layout
