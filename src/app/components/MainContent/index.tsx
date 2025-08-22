import Image from "next/image"
const MainContent = () => {
    return(
        <div className=" flex justify-center items-center p-10 ">
          <div className=" max-w-2xl border-4 border-gray-300 rounded-lg p-6 bg-white shadow-md flex flex-col gap-4"> 
            {/* h2 p and image */}
            <div className="flex justify-between items-center gap-6">
             <div className="flex flex-col gap-3">   
               <h2 className="font-extrabold text-3xl justify-center text-gray-600">Color Picker!</h2>
               <p className=" text-gray-600">This is where some subtitle is supposed to be</p>
             </div>
              <Image src={'/additive-subtractive.png'} alt="subtractive-color-image" width={150} height={150}/>
            </div>
            <h2 className="text-xl font-semibold  text-gray-700">Color Systems</h2>
            <h2 className="text-lg font-medium text-gray-700">Pixel</h2>
            <h2 className="text-lg font-medium text-gray-700">RGB and Hexadecimal notation</h2>
            <p>A structured method for creating different colors using a set of primary colors and rules for mixing them.</p>
            <p>Start with white and apply colored pigments that absorb light.</p>
            <p>White when red, blue and green are combined in their maximum intensities</p>
            <p>rgb(152, 116, 249) (RGB)</p>
            <p>#9874F9 (HEX)</p>
            <p>It's made of red, green and blue lights with adjustable intensities (a pixels has 3 panels of light)</p>
            <p>RGB values range from 0 (minimum intensity) - 255 (maximum intensity)</p>
          </div> 
        </div>
    )
}

export default MainContent