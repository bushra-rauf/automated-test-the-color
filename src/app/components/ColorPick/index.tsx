type colorPickProps = {
    color: string,
    colorHeading: string,
    onClick: ()=> void
}
const ColorPick = ({color, colorHeading,onClick}: colorPickProps) => {
    return(
      <div data-testid='color-pick-container' className="max-w-3xl mx-auto flex flex-col items-center justify-center border rounded-2xl p-6 bg-white gap-4 "
      style={{ backgroundColor: color }}>
      <h1 className="text-xl font-bold text-gray-800">{colorHeading}</h1>
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