import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 const  addVal  = ()=>{
  if(count<20){
    setCount(count+1);
  }
 }


const removeVal = ()=>{
  if(count >0){
    setCount(count-1)
  }
}
  

  return (
   <>

   <h3>counter : {count}</h3>

   <button  onClick={addVal}
   >Add Values</button>
   <button onClick={removeVal}>Reamove Value</button>
   </>
  )
}

export default App
