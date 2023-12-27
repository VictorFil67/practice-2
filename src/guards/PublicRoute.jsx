import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectUser } from 'store/auth/selectors'

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser)
  const location = useLocation()

  return !user ? children : <Navigate to={'/'} state={location} />
}

export default PublicRoute
