import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './styles/global.css';

// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactSidebar from './components/ContactSidebar/ContactSidebar';
import BackToHome from './components/BackToHome/BackToHome';

// Import Pages
import Home from './pages/Home';
import InventoryManagement from './pages/Solutions/InventoryManagement';
import POSSManagement from './pages/Solutions/POSSManagement'; // Renamed
import OutletDetail from './pages/Solutions/OutletDetail';
import OrderTracking from './pages/Solutions/OrderTracking';
import StockControl from './pages/Solutions/StockControl';
import RestaurantsAndCafes from './pages/Industries/RestaurantsAndCafes';
import RetailStores from './pages/Industries/RetailStores';
import FoodManufacturing from './pages/Industries/FoodManufacturing';
import Warehouses from './pages/Industries/Warehouses';
import RealTimeTracking from './pages/Features/RealTimeTracking';
import AnalyticsDashboard from './pages/Features/AnalyticsDashboard';
import MultiLocationSupport from './pages/Features/MultiLocationSupport';
import TalkToUs from './pages/Contact/TalkToUs';

// Company Pages
import AboutUs from './pages/Company/AboutUs';
import Blogs from './pages/Company/Blogs';
import Careers from './pages/Company/Careers';
import PrivacyPolicy from './pages/Company/PrivacyPolicy';
import TermsAndConditions from './pages/Company/TermsAndConditions';

// Product Pages
import ApiDocumentation from './pages/Product/ApiDocumentation';
import Pricing from './pages/Product/Pricing';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className={`app ${isLoaded ? 'loaded' : 'loading'}`}>
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Header */}
        <Header />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Solutions */}
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/poss" element={<POSSManagement />} />
          <Route path="/poss/:outletType" element={<OutletDetail />} />
          <Route path="/orders" element={<OrderTracking />} />
          <Route path="/stock" element={<StockControl />} />

          {/* Industries */}
          <Route path="/industries/restaurants" element={<RestaurantsAndCafes />} />
          <Route path="/industries/retail" element={<RetailStores />} />
          <Route path="/industries/manufacturing" element={<FoodManufacturing />} />
          <Route path="/industries/warehouses" element={<Warehouses />} />

          {/* Features */}
          <Route path="/features/tracking" element={<RealTimeTracking />} />
          <Route path="/features/analytics" element={<AnalyticsDashboard />} />
          <Route path="/features/analytics" element={<AnalyticsDashboard />} />
          <Route path="/features/multi-location" element={<MultiLocationSupport />} />
          <Route path="/talk-to-us" element={<TalkToUs />} />

          {/* Company */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          {/* Product */}
          <Route path="/api" element={<ApiDocumentation />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Back To Home Button */}
        <BackToHome />

        {/* Contact Sidebar */}
        <ContactSidebar />
      </div>
    </Router>
  );
}

export default App;
