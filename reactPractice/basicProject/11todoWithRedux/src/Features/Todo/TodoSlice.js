// import { nenoId} from "react-redux"
import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"



const initialStage = {
    todos: [{
        id: 1,
        text: "hello redux world",
        IsEditable: false
    }]
}

const TodoSlice = createSlice({
    name: "todo",
    initialState: initialStage,
    reducers: {
        // in reducers you  put all the features what you want in your app like addTodo removeTodo  
        //  Delete Todo  and something else  and also add functionality with the initialization
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                IsEditable: false
            }

            state.todos.push(todo)
            // console.log(state.todos);

        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload
            const todo = state.todos.find(t => t.id === id)

            if (todo && newText =="") {
                if (newText !== undefined) {
                    // actually editing text
                    todo.text = newText
                    todo.IsEditable = false
                } else {
                    // toggling edit mode on/off
                    todo.IsEditable = !todo.IsEditable
                }
            }
        }



    }
})

export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions

export default TodoSlice.reducer