import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonWithColour from './components/ButtonWithColour'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ButtonWithColour/>
   </>

   )
   }
 

export default App
