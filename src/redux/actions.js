import { CREATE_TODO, DELETE_TODO } from "./actionTypes"

export const createTodoAction = (todo) => {
return {type: CREATE_TODO, payload: todo}
}

export const deleteTodoAction = (todoId) => {
    return {type: DELETE_TODO, payload: todoId}
}