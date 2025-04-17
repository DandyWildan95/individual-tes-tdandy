import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import { useAppContext } from '../../context/AppContext';
import MarketplaceGrid from '../MarketplaceGrid';
import SearchBar from '../SearchBar';

const MarketplacePage = () => {
  const { user } = useAppContext();

  return (
    <div className="bg-green-50 min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Sustainable Marketplace
          </h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Discover local, eco-friendly products that support our community and planet
          </p>
        </section>
        
        <SearchBar onSearch={(searchParams) => {
          // Implement search logic
          console.log('Search Parameters:', searchParams);
        }} />
        
        <MarketplaceGrid />
        
        {!user && (
          <section className="bg-green-700 text-white p-8 rounded-lg text-center mt-8">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-6">
              Create an account to start supporting local, sustainable businesses!
            </p>
            <div className="space-x-4">
              <Link 
                to="/register" 
                className="bg-white text-green-700 px-6 py-3 rounded-full hover:bg-green-100 transition"
              >
                Sign Up
              </Link>
              <Link 
                to="/login" 
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              >
                Login
              </Link>
            </div>
          </section>
        )}
      </main>
      
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Sustainable Community Market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MarketplacePage;