import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function UserInfo() {

    const {user} = useContext(UserContext)

    if(!user.userName) return <div>please logIn </div>

  return (
    <div>welcome :{user.userName}</div>
  )
}

export default UserInfo