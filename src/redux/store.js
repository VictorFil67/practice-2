import {combineReducers, createStore} from 'redux';
import { todoReducer } from './reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
})

export const store = createStore(rootReducer);