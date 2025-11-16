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
          <Link href="/write" className="hover:text-black">Write</Link>
          <Link 
              href="/sign-in" 
              className="text-sm hover:text-black hidden sm:inline-block"
            >
              Sign In
            </Link>
            
            <Link
              href="/lab2/signup"
              className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium 
                       hover:bg-gray-800 active:bg-gray-900 transition-colors duration-200"
            >
              Get Started
            </Link>
            
          </nav>
        </div>
    </header>
  )
}

export default Header