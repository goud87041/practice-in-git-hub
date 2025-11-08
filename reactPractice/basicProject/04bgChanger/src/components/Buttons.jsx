
import React from 'react'

function Buttons({color,index , onClick}) {
  // console.log(color);
  
  return (
   
    <button style={{ backgroundColor: color }} className='px-4 py-2 m-2 rounded-lg text-white font-semibold shadow-md hover:opacity-80 transition-all' key={index}  onClick ={()=>onClick(color)}> {color}</button>
    
  )
}

export default Buttons