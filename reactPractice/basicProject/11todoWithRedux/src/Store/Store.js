import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice';
// import {todoReducer} from "../Features/Todo/TodoSlice"
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})