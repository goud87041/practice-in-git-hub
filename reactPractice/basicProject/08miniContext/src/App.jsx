import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from "./Context/UserContextProvider"
import UserLogin from './Components/UserLogin'
import UserInfo from './Components/UserInfo'


function App() {
  // const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
   <UserLogin/>
   <UserInfo/>
   </UserContextProvider>
  )
}

export default App
