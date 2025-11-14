import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sm:bg-black text-gray-700 sm:text-white mt-20 py-4 p-1 border-t border-black sm:border-gray-700 rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
      
        {/* Links */}
        <div className="flex  flex-row  md:border-t md:justify-start border-black w-full m-w-auto gap-6 text-sm">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-500">Contact</Link>
          <Link href="/privacy" className="hover:text-gray-500">Privacy</Link>
          <Link href="/terms" className="hover:text-gray-500">Terms</Link>
         </div>
      
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Medium Clone. All rights reserved.
        </p>
        
      
      </div>
    </footer>
  );
}