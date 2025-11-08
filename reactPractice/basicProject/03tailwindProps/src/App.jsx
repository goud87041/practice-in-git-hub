import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/cart'

function App() {
  const [count, setCount] = useState(0)

  const myObj ={
    name:"abhishek ",
    age :24
  }
   

  return (
    <>
      <div className="bg-red-400 text-black">hello</div>
      <div className='flex gap-20 items-cetner justify-cetner'>
        <Card1 userInfo = {myObj}/>
      <Card1 userInfo = {myObj} /> 
      </div>     
    </>
  )
}

export default App
