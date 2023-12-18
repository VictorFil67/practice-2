import { CREATE_TODO, DELETE_TODO } from "./actionTypes";

const initialState = {
todo: [],
}
 
export const todoReducer = (state = initialState, actions) =>{
switch (actions.type) {
    case CREATE_TODO:
  return  {...state, todo: [...state.todo, actions.payload]}

        case DELETE_TODO:
return {...state, todo: state.todo.filter(item => item.id !== actions.payload)}
    default:
       return state;
}
}