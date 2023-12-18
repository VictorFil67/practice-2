import Layout from 'layout/layout'
import HomePage from 'pages/HomePage'
import SearchUsersPage from 'pages/SearchUsersPage'
import UserDetailsPage from 'pages/UserDetailsPage'
import ToDo from 'pages/ToDo'
import CreateTodoPage from 'pages/CreateTodoPage';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}></Route>
          <Route path="/search" element={<SearchUsersPage />}></Route>
          <Route path="/search/:id" element={<UserDetailsPage />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/create/todo" element={<CreateTodoPage />}></Route>
        </Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
