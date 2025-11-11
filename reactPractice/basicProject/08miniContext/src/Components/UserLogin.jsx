import React from 'react'
import { useContext } from 'react';
import { useCallback } from 'react';
import { use } from 'react';
import { useState } from 'react'
// import User
import UserContext from '../Context/UserContext';

function UserLogin() {

    const [userName ,setUserName]=useState("");
    const[userPassword , setUserPassword] = useState("")


    const {setUser} = useContext(UserContext)

    const handleSubmit =(e) => {
        e.preventDefault();
        setUser({userName,userPassword})
    }
       

     

  return (
    <div>
        <input
        value={ userName}
        onChange={(e)=>(setUserName(e.target.value))}
        type="text" />
         <input 
        value={ userPassword}
        onChange={(e)=>(setUserPassword(e.target.value))}
         type="text" />
         <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default UserLogin