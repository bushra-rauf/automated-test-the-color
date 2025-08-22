type colorPickProps = {
    color: string,
    colorHeading: string,
    onClick: ()=> void
}
const ColorPick = ({color, colorHeading,onClick}: colorPickProps) => {
    return(
      <div className="flex flex-col items-center justify-center gap-4 p-6 border-2 rounded-lg shadow-md"
      style={{ backgroundColor: color }}>
      <h2 className="text-xl font-bold text-gray-800">{colorHeading}</h2>
      <h2 className="text-lg font-medium text-gray-700">{color}</h2>

      <a href="#"role="link" onClick={(e) => {
          e.preventDefault()
          onClick()
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Click me!
      </a>
    </div> 
    
    )
}

export default ColorPick