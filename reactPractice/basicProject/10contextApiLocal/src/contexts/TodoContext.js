import {useContext,createContext} from "react"


export const createTodoContext = createContext({
    Todos :[{

    }],
    addTodo : (Todo)=>{},
    deleteTodo : (id)=>{},
    editTodo : (id , Todo)=>{},
    toggleTodo : (id)=>{}
})

export const useTodo = ()=>{
    return useContext(createTodoContext);
}

export const TodoProvider = createTodoContext.Provider