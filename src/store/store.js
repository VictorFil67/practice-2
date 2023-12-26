import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'
import { userReduser } from './users/usersSlice'
import { productsReducer } from './products/productsSlice'
import { authReducer } from './auth/slice'

const reducer = {
  todo: todoReducer,
  users: userReduser,
  products: productsReducer,
  auth: authReducer,
}

export const store = configureStore({ reducer })
