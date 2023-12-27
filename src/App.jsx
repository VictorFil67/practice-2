import Layout from 'layout/layout'
import HomePage from 'pages/HomePage'
import SearchUsersPage from 'pages/SearchUsersPage'
import UserDetailsPage from 'pages/UserDetailsPage'
import ToDo from 'pages/ToDo'
import CreateTodoPage from 'pages/CreateTodoPage'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from 'pages/ProductsPages/ProductsPage'
import ProductsDetailsPage from 'pages/ProductsPages/ProductsDetailsPage'
import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'
import PrivateRoute from 'guards/PrivateRoute'
import PublicRoute from 'guards/PublicRoute'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from 'store/auth/selectors'
import { refreshThunk } from 'store/auth/thunks'
import { Loader } from 'components/Loader/Loader'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    if (!user) dispatch(refreshThunk())
  }, [dispatch, user])
  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/search" element={<SearchUsersPage />}></Route>
          <Route path="/search/:id" element={<UserDetailsPage />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/create/todo" element={<CreateTodoPage />}></Route>
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
          <Route path="/products/:id" element={<ProductsDetailsPage />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
