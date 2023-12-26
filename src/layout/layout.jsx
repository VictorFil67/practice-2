import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Nav } from './layout.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from 'store/auth/selectors'
import { logOut } from 'store/auth/slice'

const Layout = () => {
  const token = useSelector(selectToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClick() {
    dispatch(logOut())
    navigate('/login')
  }
  return (
    <>
      <header>
        <nav>
          <Nav to={`/`}>Home page</Nav>
          <Nav to={`/search`}>Search users</Nav>
          <Nav to={`/todo`}>Todo</Nav>
          <Nav to={`/create/todo`}>CreateTodo</Nav>
          <Nav to={`/products`}>Products</Nav>
          {token ? (
            <button onClick={handleClick} type="button">
              Logout
            </button>
          ) : (
            <Nav to={'/login'}>Sign In</Nav>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Layout
