 

import React from 'react'
import { useState } from 'react'
import Buttons from "./Buttons"

function ButtonWithColour() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal", "brown", "gray"];

    const [bgColor,setBgColor] = useState("white")
  return (
    <div className="w-screen h-screen flex gap-10  transition-all duration-500 "
    style={{ backgroundColor: bgColor }} >

    { colors.map((color,index)=>(
        <Buttons color={color} key ={index } onClick={setBgColor}/>
    ))}
    </div>
  )
}

export default ButtonWithColour