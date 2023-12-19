import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'

const reducer = {
  todo: todoReducer,
}

export const store = configureStore({ reducer })
