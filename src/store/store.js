import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'
import { userReduser } from './users/usersSlice'
import { productsReducer } from './products/productsSlice'

const reducer = {
  todo: todoReducer,
  users: userReduser,
  products:productsReducer
}

export const store = configureStore({ reducer })
