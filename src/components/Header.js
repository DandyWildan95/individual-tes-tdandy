import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            🌱 SCM
            <span className="ml-2 text-sm hidden md:inline">Sustainable Community Market</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/marketplace" className="hover:text-green-200 transition">Marketplace</Link>
          <Link to="/sellers" className="hover:text-green-200 transition">Become a Seller</Link>
          <Link to="/community-impact" className="hover:text-green-200 transition">Community Impact</Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/login" 
            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded transition"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-4 pb-2 space-y-2">
            <Link 
              to="/" 
              className="block hover:bg-green-600 p-2 rounded"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/marketplace" 
              className="block hover:bg-green-600 p-2 rounded"
              onClick={toggleMenu}
            >
              Marketplace
            </Link>
            <Link 
              to="/sellers" 
              className="block hover:bg-green-600 p-2 rounded"
              onClick={toggleMenu}
            >
              Become a Seller
            </Link>
            <Link 
              to="/community-impact" 
              className="block hover:bg-green-600 p-2 rounded"
              onClick={toggleMenu}
            >
              Community Impact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/login" 
                className="bg-green-600 text-center hover:bg-green-500 px-4 py-2 rounded transition"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-white text-green-700 text-center hover:bg-green-100 px-4 py-2 rounded transition"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;