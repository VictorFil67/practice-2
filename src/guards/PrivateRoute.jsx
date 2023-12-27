import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectUser } from 'store/auth/selectors'

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser)
  const location = useLocation()

  return user ? children : <Navigate to={'/login'} state={location} />
}

export default PrivateRoute
