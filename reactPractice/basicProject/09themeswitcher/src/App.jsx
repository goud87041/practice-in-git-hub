import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'

function App() {

  const [themeMode ,setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light");
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
      document.querySelector("html").classList.remove("dark","light")
      document.querySelector("html").classList.add(themeMode)
    // removeCurrentTheme.classList.add(themeMode)
  },[themeMode])

  // const lightTheme

  return (
     <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
