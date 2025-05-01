import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-zinc-900 text-white shadow-lg sticky top-0 z-50">
    <h1 className="text-3xl font-bold text-pink-500">Sujin</h1>
    
    {/* Desktop Navigation */}
    <ul className="hidden md:flex space-x-6 items-center">
        <li><Link to="/" className="text-white hover:text-pink-500 transition-colors duration-300 text-lg">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-pink-500 transition-colors duration-300 text-lg">About</Link></li>
        <li><Link to="/portfolio" className="text-white hover:text-pink-500 transition-colors duration-300 text-lg">Portfolio</Link></li>
        <li><Link to="/achievments" className="text-white hover:text-pink-500 transition-colors duration-300 text-lg">Achievments</Link></li>
        <li><Link to="/contact" className="text-white hover:text-pink-500 transition-colors duration-300 text-lg">Contact</Link></li>
    </ul>

    {/* Mobile Menu Toggle */}
    <div className="md:hidden">
        {/* Hamburger Icon */}
        <button className="text-white focus:outline-none" aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>

    {/* Mobile Menu (Hidden by default) */}
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
        <div className="fixed top-0 right-0 w-64 h-full bg-zinc-900 shadow-lg p-6 transform translate-x-full transition-transform duration-300">
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-white focus:outline-none" aria-label="Close Menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Mobile Menu Links */}
            <ul className="mt-12 space-y-4">
                <li><a href="/" className="block text-white hover:bg-pink-500 hover:text-white p-2 rounded transition-colors duration-300">Home</a></li>
                <li><a href="/about" className="block text-white hover:bg-pink-500 hover:text-white p-2 rounded transition-colors duration-300">About</a></li>
                <li><a href="/portfolio" className="block text-white hover:bg-pink-500 hover:text-white p-2 rounded transition-colors duration-300">Portfolio</a></li>
                <li><a href="/contact" className="block text-white hover:bg-pink-500 hover:text-white p-2 rounded transition-colors duration-300">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar