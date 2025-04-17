import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const MarketplaceGrid = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock product data - replace with actual API call
  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'Organic Tomatoes',
        description: 'Fresh, locally grown organic tomatoes from Green Valley Farm',
        price: 4.99,
        image: 'https://example.com/tomatoes.jpg',
        seller: 'Green Valley Farm',
        category: 'Organic Produce',
        sustainabilityScore: 9
      },
      {
        id: 2,
        name: 'Handmade Ceramic Mug',
        description: 'Eco-friendly ceramic mug crafted by local artisans',
        price: 24.50,
        image: 'https://example.com/mug.jpg',
        seller: 'Local Pottery Studio',
        category: 'Handmade',
        sustainabilityScore: 8
      },
      // Add more mock products
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    setLoading(false);
  }, []);

  const handleSearch = ({ searchTerm, category }) => {
    const filtered = products.filter(product => 
      (category === 'all' || product.category.toLowerCase().includes(category.toLowerCase())) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-green-50 rounded-lg mt-6">
          <h2 className="text-2xl text-green-800 mb-4">No Products Found</h2>
          <p className="text-green-600">Try adjusting your search or explore different categories</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      )}
      
      <div className="text-center mt-12">
        <p className="text-green-700">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>
    </div>
  );
};

export default MarketplaceGrid;