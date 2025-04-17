import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { useAppContext } from '../../context/AppContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useAppContext();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - replace with actual API call
  useEffect(() => {
    const mockProduct = {
      id: id,
      name: 'Organic Tomatoes',
      description: 'Fresh, locally grown organic tomatoes from Green Valley Farm. Harvested with sustainable farming practices and minimal environmental impact.',
      price: 4.99,
      image: 'https://example.com/tomatoes.jpg',
      seller: 'Green Valley Farm',
      category: 'Organic Produce',
      sustainabilityScore: 9,
      origin: 'Local Farm, 20 miles from market',
      certifications: ['Organic', 'Fair Trade'],
      stock: 50
    };

    setProduct(mockProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-green-500"></div>
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, Math.min(product.stock, quantity + change)));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-green-800 mb-2">{product.name}</h1>
                <p className="text-green-600 text-xl mb-4">${product.price.toFixed(2)}</p>
              </div>
              <div className={`px-3 py-1 rounded text-xs ${
                product.sustainabilityScore >= 8 
                  ? 'bg-green-200 text-green-800' 
                  : 'bg-yellow-200 text-yellow-800'
              }`}>
                Sustainability: {product.sustainabilityScore}/10
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{product.description}</p>
            
            <div className="mb-4">
              <h3 className="font-semibold text-green-700">Product Details</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Seller: {product.seller}</li>
                <li>Category: {product.category}</li>
                <li>Origin: {product.origin}</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-green-700">Certifications</h3>
              <div className="flex space-x-2">
                {product.certifications.map(cert => (
                  <span 
                    key={cert} 
                    className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border rounded">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 bg-green-100 hover:bg-green-200"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 bg-green-100 hover:bg-green-200"
                >
                  +
                </button>
              </div>
              <span className="text-gray-600">
                {product.stock} items in stock
              </span>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
              <button 
                className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-50 transition"
              >
                Favorite
              </button>
            </div>
          </div>
        </div>
        
        <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">About the Producer</h2>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              🚜
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">{product.seller}</h3>
              <p className="text-gray-600">
                A local farm committed to sustainable agriculture and community well-being.
              </p>
              <Link 
                to={`/seller/${product.seller}`} 
                className="text-green-600 hover:underline"
              >
                View Seller Profile
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailPage;