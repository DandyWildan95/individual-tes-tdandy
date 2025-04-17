import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    description,
    price,
    image,
    seller,
    category,
    sustainabilityScore
  } = product;

  const getSustainabilityColor = (score) => {
    if (score >= 8) return 'bg-green-200 text-green-800';
    if (score >= 5) return 'bg-yellow-200 text-yellow-800';
    return 'bg-red-200 text-red-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs ${getSustainabilityColor(sustainabilityScore)}`}>
          Sustainability: {sustainabilityScore}/10
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-green-800">{name}</h3>
          <span className="text-green-600 font-semibold">${price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">By {seller}</span>
          <span className="text-sm text-green-700 bg-green-100 px-2 py-1 rounded">
            {category}
          </span>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <Link 
            to={`/product/${id}`} 
            className="flex-grow text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            View Details
          </Link>
          <button 
            className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50 transition"
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;