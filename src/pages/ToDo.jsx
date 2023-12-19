import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction } from 'store/todoSlice'

const ToDo = () => {
  const dispatch = useDispatch()
  const { todo } = useSelector(state => state.todo)

  const deleteTodo = id => {
    dispatch(deleteTodoAction(id))
  }

  return (
    <ul>
      {todo.map(item => {
        return (
          <li key={item.id}>
            <p>{item.title}</p>
            <button onClick={() => deleteTodo(item.id)} type="button">
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ToDo
