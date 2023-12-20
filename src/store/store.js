import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'
import { userReduser } from './users/usersSlice'

const reducer = {
  todo: todoReducer,
  users: userReduser,
}

export const store = configureStore({ reducer })
