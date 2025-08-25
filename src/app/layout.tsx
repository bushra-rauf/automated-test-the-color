'use client'
import { useState } from "react";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page";
import Hex from "./hex/page";
import RGB from "./rgb/page";

export default function RootLayout(){
    const [currentPage, setCurrentPage] = useState('home')

  return (
    <html lang="en h-full">
      <body className={`min-h-screen flex flex-col`}>
        <Header setCurrentPage={setCurrentPage}/>
         < main className="flex-grow">
                { currentPage==="home" && <Home/>}
                { currentPage==="hex" && <Hex />}
                { currentPage==="rgb" && <RGB/>}
         </main>
        <Footer/>
      </body>

    </html>
  );
}
