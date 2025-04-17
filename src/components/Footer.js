import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-4">Sustainable Community Market</h3>
          <p className="text-sm">Connecting local producers with conscious consumers</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul>
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
            <li><Link to="/marketplace" className="hover:text-green-200">Marketplace</Link></li>
            <li><Link to="/sellers" className="hover:text-green-200">Become a Seller</Link></li>
            <li><Link to="/community-impact" className="hover:text-green-200">Community Impact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul>
            <li><Link to="/faq" className="hover:text-green-200">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-green-200">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-green-200">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-green-200">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">Instagram</a>
          </div>
          <div className="mt-4">
            <p className="text-sm">Subscribe to our newsletter:</p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 mt-2 text-black rounded"
            />
            <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-6 border-t border-green-700 pt-4">
        <p className="text-sm">
          {new Date().getFullYear()} Sustainable Community Market. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;