import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import WelcomeModal from './components/common/WelcomeModal';
import Home from './pages/Home';
import Wholesale from './pages/Wholesale';
import About from './pages/About';
import Contact from './pages/Contact';
import './i18n';

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
    // Could save to localStorage to remember user's preference
    // localStorage.setItem('welcomeModalShown', 'true');
  };

  useEffect(() => {
    // Check if modal has been shown before
    // const hasModalBeenShown = localStorage.getItem('welcomeModalShown') === 'true';
    // setShowWelcomeModal(!hasModalBeenShown);
    
    // For demonstration purposes, always show modal
    setShowWelcomeModal(true);
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/lbasianfood" element={<Home />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <Footer />
        <WhatsAppButton />
        
        {showWelcomeModal && (
          <WelcomeModal onClose={handleCloseWelcomeModal} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App