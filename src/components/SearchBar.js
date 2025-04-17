import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'organic', label: 'Organic' },
    { value: 'local', label: 'Local Produce' },
    { value: 'sustainable', label: 'Sustainable Goods' },
    { value: 'handmade', label: 'Handmade' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, category });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <div className="flex-grow">
          <input 
            type="text" 
            placeholder="Search for sustainable products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          type="submit" 
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Search
        </button>
      </form>
      
      <div className="mt-2 text-sm text-gray-500">
        Tip: Find local, organic, and sustainable products in our community marketplace!
      </div>
    </div>
  );
};

export default SearchBar;