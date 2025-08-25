'use client'
import { useState } from "react";
import ColorPick from "../components/ColorPick";
const RGB = () => {
     const [color, setColor] = useState("rgb(255, 255, 255)");

  const generateColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };
   return(
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: color}} >
       <ColorPick colorHeading="RGB Background:" color={color} onClick={generateColor}/>
    </div>  
   )
}

export default RGB