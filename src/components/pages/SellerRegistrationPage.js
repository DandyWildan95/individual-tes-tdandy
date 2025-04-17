import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';
import { useAppContext } from '../../context/AppContext';

const SellerRegistrationPage = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    productCategories: [],
    sustainabilityPractices: [],
    businessDescription: ''
  });

  const productCategoryOptions = [
    'Produce', 'Dairy', 'Meat', 'Bakery', 'Handmade Goods', 'Artisan Products'
  ];

  const sustainabilityPractices = [
    'Organic Farming', 'Renewable Energy', 'Zero Waste', 
    'Local Sourcing', 'Biodegradable Packaging', 'Fair Labor Practices'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] || []), value]
        : (prev[field] || []).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.businessName || !formData.email) {
      alert('Please fill in required fields');
      return;
    }

    // TODO: Implement actual seller registration logic
    console.log('Seller Registration Data:', formData);
    
    // Simulate successful registration
    alert('Registration submitted! We will review your application soon.');
    
    // Redirect to marketplace or seller page
    navigate('/marketplace');
  };

  // If user is not logged in, show login/register prompt
  if (!user) {
    return (
      <div className="bg-green-50 min-h-screen flex items-center justify-center">
        <Navigation />
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Please Log In to Register as a Seller
          </h2>
          <p className="text-gray-600 mb-6">
            You need to be logged in to register as a seller on our platform.
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => navigate('/login')}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Log In
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-50 min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Become a Sustainable Community Seller
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-green-700 font-semibold mb-2">Business Name *</label>
              <input 
                type="text" 
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your business name"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-green-700 font-semibold mb-2">Owner Name *</label>
                <input 
                  type="text" 
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-green-700 font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="business@example.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-green-700 font-semibold mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label className="block text-green-700 font-semibold mb-2">Business Address *</label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="123 Green Street, City, State"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-green-700 font-semibold mb-2">Product Categories *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {productCategoryOptions.map(category => (
                  <label key={category} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value={category}
                      checked={(formData.productCategories || []).includes(category)}
                      onChange={(e) => handleCheckboxChange(e, 'productCategories')}
                      className="form-checkbox text-green-600"
                    />
                    <span className="ml-2">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-green-700 font-semibold mb-2">Sustainability Practices *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {sustainabilityPractices.map(practice => (
                  <label key={practice} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value={practice}
                      checked={(formData.sustainabilityPractices || []).includes(practice)}
                      onChange={(e) => handleCheckboxChange(e, 'sustainabilityPractices')}
                      className="form-checkbox text-green-600"
                    />
                    <span className="ml-2">{practice}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-green-700 font-semibold mb-2">Business Description *</label>
              <textarea 
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tell us about your business, its mission, and commitment to sustainability"
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
              >
                Submit Seller Application
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SellerRegistrationPage;