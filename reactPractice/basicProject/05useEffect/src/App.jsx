import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [passWord, setPassword] = useState("")
  const [allowChar, setAllowChar] = useState(false)
  const [allowNum, setAllowNum] = useState(false)
  const passRef = useRef(null)


  const copyPassWord = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(passWord)
  },[passWord])


  const passWordGenerater = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""


    if (allowNum) str += "0987654321"
    if (allowChar) str += "!@#$%^&*(){}[]"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    console.log(pass);
    setPassword(pass)



  }, [length, setPassword, allowChar, allowNum])


  useEffect(()=>{
  passWordGenerater()},[allowChar,allowNum,setPassword,length])

  return (

    <>
       
        <div class="p-4 flex flex-col items-center gap-4">
          <div class="flex gap-2">
            <input 
            type="text"
            readonly 
            class="border rounded p-2 w-64" 
            value={passWord}
             ref={passRef}
            />
            <button 
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={copyPassWord}
            >
              copy
            </button>
          </div>

          <div class="flex flex-col items-start gap-2 w-64">
            <label class="  justify-between w-full">
              <span>Range of Password: {length}</span>
              <input 
              type="range" 
              min="8" 
              max="99"
              value={length}
              onChange={(e)=>setLength(e.target.value)}
              />
            </label>

            <label>
              <input 
              type="checkbox"
              defaultChecked={allowChar}
              // value={allowChar}

              onChange={()=>{
                setAllowChar((prev)=>(!prev))
              }}
              /> Allow Characters
            </label>

            <label>
              <input 
              type="checkbox"
              defaultChecked={allowNum}
              // value={allowNum}
              onChange={()=>{
                setAllowNum((prev)=>(!prev))
              }}
              /> Allow Numbers
            </label>
          </div>
        </div>

      

    </>
  )
}

export default App
