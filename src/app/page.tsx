'use client'
import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
   const [currentPage, setCurrentPage] = useState('')
  return (
      <div className="flex flex-col min-h-screen">
      <Header setCurrentPage={setCurrentPage}/>
       <div>
       { currentPage==="home" && <Home/>}
       { currentPage==="hex" && <Hex />}
       { currentPage==="rgb" && <RBG/>}
      </div>
      < main className="flex-grow">
       <MainContent/>
      </main>  
     </div>
  );
}
