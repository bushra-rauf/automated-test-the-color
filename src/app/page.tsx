'use client'
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./Footer";

export default function Home() {
   const [currentPage, setCurrentPage] = useState('')
  return (
    <>
      <Header setCurrentPage={setCurrentPage}/> 
       { currentPage==="hex" && <Hex />}
 

      <Footer/>

    </>
  );
}
