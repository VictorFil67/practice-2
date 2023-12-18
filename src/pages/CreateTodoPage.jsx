import React from 'react'
import { useDispatch } from 'react-redux';
import { createTodoAction } from '../redux/actions.js';
import { nanoid } from 'nanoid';


const CreateTodoPage = () => {

    const dispatch = useDispatch();

    const createTodo = (event) => {
        event.preventDefault();
        const newTodo = {id: nanoid(), title: event.target.elements.newTodo.value}
        dispatch(createTodoAction(newTodo))
    }
  return (
    <form onSubmit={createTodo}>
        <input name='newTodo' type="text" />
        <button type='submit'></button>
    </form>
  )
}

export default CreateTodoPage