import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="w-full border-b  border-black">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
            {/* Logo */}
          <Link href='/' >
          <h1 className='text-2xl text-black font-semibold cursor-pointer'>Medium</h1> 
          </Link>
            {/* Navigation Links */}
             <nav className="flex  flex-col md:flex-row   justify-between py-4 gap-3  text-black">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/about" className="hover:text-black">Our story</Link>
          <Link href="/membership" className="hover:text-black">Membership</Link>
          <Link href="/login" className="hover:text-black">Write</Link>
           <Link href="/contact" className="hover:text-black">sign in</Link>

          <Link
            href="/register"
            className="bg-black text-white px-2 py-2 rounded-full hover:bg-gray-900">
            Get Started
            </Link>
            
          </nav>
        </div>
    </header>
  )
}

export default Header