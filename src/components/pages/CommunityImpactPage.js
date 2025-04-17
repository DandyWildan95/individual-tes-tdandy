// src/components/pages/CommunityImpactPage.js
import React from 'react';
import Navigation from '../Navigation';

const CommunityImpactPage = () => {
  const impactStories = [
    {
      title: 'Green Valley Farm',
      description: 'Transformed 50 acres of land to organic farming, reducing carbon footprint by 40%',
      icon: '🌾'
    },
    {
      title: 'Local Artisan Collective',
      description: 'Provided sustainable income for 25 local craftspeople through fair trade practices',
      icon: '🤲'
    },
    {
      title: 'Zero Waste Initiative',
      description: 'Helped local businesses reduce waste by 60% through innovative recycling programs',
      icon: '♻️'
    }
  ];

  return (
    <div className="bg-green-50 min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Community Impact
          </h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            See how our marketplace is creating positive change, one sustainable choice at a time.
          </p>
        </section>
        
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {impactStories.map((story, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{story.icon}</div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                {story.title}
              </h2>
              <p className="text-gray-600">
                {story.description}
              </p>
            </div>
          ))}
        </section>
        
        <section className="bg-green-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-6">
            Every purchase you make supports local communities and sustainable practices.
          </p>
          <a 
            href="/marketplace" 
            className="bg-white text-green-700 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            Shop Sustainably
          </a>
        </section>
      </main>
      
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Sustainable Community Market. Empowering Communities.</p>
        </div>
      </footer>
    </div>
  );
};

export default CommunityImpactPage;