import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../AppWrite/Auth';
import { logOut } from '../../Store/AuthSlice';

function LogoutBtn() {
  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.status)

  const logoutHandler = ()=>{
    console.log(userStatus);

    authService.getCurrentUser().then((user) => console.log("CURRENT USER:", user));
     

    authService.logOut().then(()=>{
      dispatch(logOut())
    })
   
    
  }
    return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn