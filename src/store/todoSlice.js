import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todo: [] },
  reducers: {
    createTodoAction: (state, actions) => {
      // return { ...state, todo: [...state.todo, actions.payload] }
      state.todo.push(actions.payload)
    },
    deleteTodoAction: (state, actions) => {
      // return { ...state, todo: state.todo.filter(item => item.id !== actions.payload) }
      state.todo = state.todo.filter(item => item.id !== actions.payload)
    },
  },
})
export const todoReducer = todoSlice.reducer
export const { createTodoAction, deleteTodoAction } = todoSlice.actions
