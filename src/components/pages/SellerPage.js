// src/components/pages/SellerPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { useAppContext } from '../../context/AppContext';
import ProductCard from '../../components/ProductCard';

const SellerPage = () => {
  const { id } = useParams();
  const { user } = useAppContext();
  const [sellerInfo, setSellerInfo] = useState(null);
  const [products, setProducts] = useState([]);

  // Mock seller and product data - replace with actual API call
  useEffect(() => {
    const mockSellerInfo = {
      id: id,
      name: 'Green Valley Farm',
      description: 'A family-owned organic farm dedicated to sustainable agriculture and community well-being.',
      location: 'Sunnyvale, California',
      established: 2010,
      sustainabilityScore: 9,
      certifications: ['Organic', 'Fair Trade', 'Local'],
      profileImage: 'https://example.com/farm-profile.jpg',
      coverImage: 'https://example.com/farm-cover.jpg'
    };

    const mockProducts = [
      {
        id: 1,
        name: 'Organic Tomatoes',
        description: 'Fresh, locally grown organic tomatoes',
        price: 4.99,
        image: 'https://example.com/tomatoes.jpg',
        seller: 'Green Valley Farm',
        category: 'Organic Produce',
        sustainabilityScore: 9
      },
      {
        id: 2,
        name: 'Heirloom Carrots',
        description: 'Colorful, nutrient-rich heirloom carrots',
        price: 3.50,
        image: 'https://example.com/carrots.jpg',
        seller: 'Green Valley Farm',
        category: 'Organic Produce',
        sustainabilityScore: 8
      }
    ];

    setSellerInfo(mockSellerInfo);
    setProducts(mockProducts);
  }, [id]);

  if (!sellerInfo) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-green-50 min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <section 
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${sellerInfo.coverImage})` }}
        >
          <div className="absolute inset-0 bg-green-800 opacity-60"></div>
          <div className="container mx-auto px-4 relative z-10 flex items-center h-full">
            <div className="flex items-center space-x-6">
              <img 
                src={sellerInfo.profileImage} 
                alt={sellerInfo.name} 
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <div className="text-white">
                <h1 className="text-4xl font-bold">{sellerInfo.name}</h1>
                <p className="text-green-200">{sellerInfo.location}</p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-green-800 mb-4">About Us</h2>
                <p className="text-gray-700">{sellerInfo.description}</p>
                
                <div className="mt-4">
                  <h3 className="font-semibold text-green-700">Certifications</h3>
                  <div className="flex space-x-2 mt-2">
                    {sellerInfo.certifications.map(cert => (
                      <span 
                        key={cert} 
                        className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-6">Our Products</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Seller Details</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Established:</strong> {sellerInfo.established}
                  </li>
                  <li>
                    <strong>Sustainability Score:</strong> 
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${
                      sellerInfo.sustainabilityScore >= 8 
                        ? 'bg-green-200 text-green-800' 
                        : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {sellerInfo.sustainabilityScore}/10
                    </span>
                  </li>
                </ul>
                
                {user && (
                  <div className="mt-6">
                    <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
                      Contact Seller
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerPage;