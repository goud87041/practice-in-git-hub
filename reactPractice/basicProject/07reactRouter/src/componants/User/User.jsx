import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userId} = useParams();
  return (
    <div className='text-white text-2xl bg-gray-700 px-4 py-2 text-center '>User : {userId}</div>
  )
}

export default User