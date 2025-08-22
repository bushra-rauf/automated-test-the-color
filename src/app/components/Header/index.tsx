'use client'
type HeaderProps = {
  setCurrentPage: (page: string) => void;
};
const Header = ({setCurrentPage}: HeaderProps) => {
   return(
    <>   
     <header className="flex items-center justify-between bg-gray-800 text-white p-4  " >
        <h1 className='text-3xl font-extra-bold mx-auto bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500
          text-transparent bg-clip-text
'>Color Picker</h1>
     </header>
       <nav className=" bg-gray-700 text-white flex gap-4  md:gap-10 justify-end p-3  md:pr-20 ">
            <button className='hover: text-yellow-400 transition'onClick={()=>setCurrentPage('home')}>HOME</button>
            <button className='hover:text-yellow-400 transition'onClick={()=>setCurrentPage('rgb')}>RGB</button>
            <button className="hover:text-yellow-400 transition" onClick={()=>setCurrentPage('hex')}>HEX</button>
        </nav>
        </>
   )
}
export default Header