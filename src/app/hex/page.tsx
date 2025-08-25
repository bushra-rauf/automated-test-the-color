'use client'
import { useState } from "react"
import ColorPick from "../components/ColorPick"

const Hex = () => {
    const [color, setColor] = useState <string > ('#ffffff')
     const hexNumber = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
     
//      const generateHexColor = () => {
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * hexNumbers.length);
//     color += hexNumbers[randomIndex];
//   }
//   return color;
// };
   
    const handleChangeColor = () => {
            // const randomColor = '#'+ Math.floor(Math.random() * 0xffffff).toString(16)
            const randomColor = '#' + Array.from({ length: 6 }, () => hexNumber[Math.floor(Math.random() * hexNumber.length)]).join('')
        setColor(randomColor)
    }
    return(
        <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: color }}>
            <ColorPick 
                color={color} colorHeading={"HEX Background"} onClick={handleChangeColor} />
        </div>
    )
}
export default Hex