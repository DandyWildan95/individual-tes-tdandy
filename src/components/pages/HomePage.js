import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const HomePage = () => {
  const { user } = useAppContext();

  return (
    <div className="bg-green-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Sustainable Community Market
          </h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Connect with local producers, support sustainable practices, and make a difference in your community.
          </p>
        </section>
        
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">🌱 Local Producers</h2>
            <p className="text-gray-600">
              Discover and support local farmers, artisans, and small businesses committed to sustainability.
            </p>
            <Link 
              to="/marketplace" 
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Explore Marketplace
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">♻️ Sustainable Goods</h2>
            <p className="text-gray-600">
              Find eco-friendly products that reduce environmental impact and promote responsible consumption.
            </p>
            <Link 
              to="/community-impact" 
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Learn More
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">🤝 Community Impact</h2>
            <p className="text-gray-600">
              Every purchase supports local economies and contributes to a more sustainable future.
            </p>
            <Link 
              to="/sellers" 
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Meet Our Sellers
            </Link>
          </div>
        </section>
        
        {!user && (
          <section className="bg-green-700 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-6">
              Create an account to start supporting local, sustainable businesses today!
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

export default HomePage;