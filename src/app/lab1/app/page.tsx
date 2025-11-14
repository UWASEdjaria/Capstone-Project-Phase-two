import React from 'react'
import Header from '../components/layout/Header'

function page() {
  return (
    <main className="min-h-screen bg-white/87 flex flex-col justify-center p-4 md:p-8 lg:p-16">
       {/*navbar*/}
       <Header/>
       {/* Heading */}
      <h1 className="text-7xl text-left font-serif sm:text-2xl md:text-8xl lg:text-9xl px-4 mb-2 p-1 md:px-15 lg:px-15 text-black/90 font-light">
        Human   <br/> stories & ideas
      </h1>
       <p className="text-gray-700 text-xl md:text-lg lg:text-2xl mb-8 leading-relaxed  px-4 py-4 md:px-15 font-sans">
        A place to read, write, and deepen your understanding
      </p>
      
      {/* Button */}
      <button className="bg-green-600 md:bg-black  text-white px-4 py-4 md:px-15  rounded-full font-medium text-xl hover:bg-green-800 transition-colors w-60">
       Start reading
      </button>
    </main>
  )
}

export default page