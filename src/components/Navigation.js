import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, cart } = useAppContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          🌱 SCM
          <span className="ml-2 text-sm hidden md:inline">Sustainable Community Market</span>
        </Link>

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
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/marketplace" className="hover:text-green-200 transition">Marketplace</Link>
          <Link to="/sellers" className="hover:text-green-200 transition">Sellers</Link>
          <Link to="/community-impact" className="hover:text-green-200 transition">Community Impact</Link>
          
          {/* Cart */}
          <Link to="/cart" className="relative">
            🛒 
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </Link>

          {/* User Actions */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span>Welcome, {user.name}</span>
              <button 
                onClick={logout} 
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
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
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-2 space-y-2">
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
              Sellers
            </Link>
            <Link 
              to="/community-impact" 
              className="block hover:bg-green-600 p-2 rounded"
              onClick={toggleMenu}
            >
              Community Impact
            </Link>
            
            {/* Mobile User Actions */}
            {user ? (
              <div className="space-y-2">
                <div className="bg-green-800 p-2 rounded">
                  Welcome, {user.name}
                </div>
                <button 
                  onClick={logout} 
                  className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link 
                  to="/login" 
                  className="block text-center bg-green-600 hover:bg-green-500 px-4 py-2 rounded transition"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block text-center bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded transition"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;