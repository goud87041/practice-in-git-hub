import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from "../src/Components/AddTodo"
import Todos from "./Components/Todos"

function App() {

  return (
   <>
   {/* <h1 className='   text-center bg-gray-500 text-3xl text-white'>hello ji i here with react-redux</h1> */}
   <AddTodo/>
   <Todos/>

   </>
  )
}

export default App
