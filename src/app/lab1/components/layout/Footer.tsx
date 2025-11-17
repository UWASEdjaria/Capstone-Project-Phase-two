import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sm:bg-black text-gray-700 sm:text-white mt-20 py-4 p-1 border-t border-black sm:border-gray-700 rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="/info/help" className="hover:text-gray-300">Help</Link>
          <Link href="/info/status" className="hover:text-gray-300">Status</Link>
          <Link href="/info/about" className="hover:text-gray-300">About</Link>
          <Link href="/info/career" className="hover:text-gray-300">Careers</Link>
          <Link href="/info/press" className="hover:text-gray-300">Press</Link>
          <Link href="/info/press/blog" className="hover:text-gray-300">Blog</Link>
          <Link href="/info/privacy" className="hover:text-gray-300">Privacy</Link>
          <Link href="/info/rules" className="hover:text-gray-300">Rules</Link>
          <Link href="/info/terms" className="hover:text-gray-300">Terms</Link>
          <Link href="/info/Text-to-Speech" className="hover:text-gray-300">Text to Speech</Link>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Medium Clone. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
