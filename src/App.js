import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Import page components
import Navigation from './components/Navigation';
import HomePage from './components/pages/HomePage';
import MarketplacePage from './components/pages/MarketplacePage';
import CommunityImpactPage from './components/pages/CommunityImpactPage';
import SellerPage from './components/pages/SellerPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import SellerRegistrationPage from './components/pages/SellerRegistrationPage';

function App() {
  return (
    <AppProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/community-impact" element={<CommunityImpactPage />} />
            <Route path="/sellers" element={<SellerPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/register" element={<SellerRegistrationPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;