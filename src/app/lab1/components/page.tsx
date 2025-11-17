
import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Medium — Human stories & ideas",
  description: "A place to read, write, and deepen your understanding.",
};

function Page() {
  return (
    <main className="min-h-screen bg-white/87 flex flex-col justify-between p-4 ">
        
       {/*navbar*/}
       <Header/>
       {/* Heading */}
      <h1 className="text-7xl text-left font-serif sm:text-2xl md:text-8xl lg:text-9xl px-4 mb-2 p-1 md:px-15 lg:px-15 text-black/90 font-light">
        Human <br/> stories & ideas
      </h1>
       <p className="text-gray-700 text-xl md:text-lg lg:text-2xl mb-8 leading-relaxed  px-4 py-4 md:px-15 font-sans">
        A place to read, write, and deepen your understanding
      </p>
      
      {/* Button */}
       <a
      href="/lab2/signup">
      <button className="bg-green-600 md:bg-black  text-white px-4 py-4 md:px-15  rounded-full font-medium text-xl hover:bg-green-800 transition-colors w-60">
       Start reading
      </button>
      </a>
      <Footer/>
    </main>
  )
}

export default Page