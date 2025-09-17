import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import WeatherSection from './components/WeatherSection';
import RecommendationsSection from './components/RecommendationsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';
import PaymentModal from './components/PaymentModal';
import SuccessModal from './components/SuccessModal';
import PackageDetailsModal from './components/PackageDetailsModal';
import LoginPage from './components/LoginPage';

const TravelWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPackageDetailsModal, setShowPackageDetailsModal] = useState(false);
  
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('user');
    
    if (authStatus === 'true' && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLocationSearch = (location) => {
    setSelectedLocation(location);
    setActiveSection('packages');
  };

  const handleViewDetails = (pkg) => {
    setSelectedPackage(pkg);
    setShowPackageDetailsModal(true);
  };

  const handleBookNow = (pkg) => {
    // Check if user is authenticated before booking
    if (!isAuthenticated) {
      setShowLoginModal(true);
      setSelectedPackage(pkg); // Store package for after login
      return;
    }

    setSelectedPackage(pkg);
    setShowBookingModal(true);
    setShowPackageDetailsModal(false);
  };

  const handleBookingConfirm = (data) => {
    setBookingData(data);
    setShowBookingModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowSuccessModal(true);
  };

  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setShowLoginModal(false);
    
    // If there was a package selected before login, proceed to booking
    if (selectedPackage) {
      setShowBookingModal(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setActiveSection('home');
    closeAllModals();
  };

  const closeAllModals = () => {
    setShowBookingModal(false);
    setShowPaymentModal(false);
    setShowSuccessModal(false);
    setShowPackageDetailsModal(false);
    setShowLoginModal(false);
    setSelectedPackage(null);
    setBookingData(null);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onLocationSearch={handleLocationSearch} />;
      case 'packages':
        return <PackagesSection 
          onBookNow={handleBookNow} 
          onViewDetails={handleViewDetails}
          selectedLocation={selectedLocation} 
        />;
      case 'weather':
        return <WeatherSection />;
      case 'recommendations':
        return <RecommendationsSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <Hero onLocationSearch={handleLocationSearch} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isAuthenticated={isAuthenticated}
        user={user}
        onLoginClick={() => setShowLoginModal(true)}
        onLogout={handleLogout}
      />
      
      {renderSection()}
      
      {/* Login Modal */}
      {showLoginModal && (
        <LoginPage
          onClose={closeAllModals}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      
      {/* Modals */}
      {showPackageDetailsModal && (
        <PackageDetailsModal 
          package={selectedPackage}
          onClose={closeAllModals}
          onBookNow={handleBookNow}
        />
      )}
      
      {showBookingModal && (
        <BookingModal 
          package={selectedPackage}
          onClose={closeAllModals}
          onConfirm={handleBookingConfirm}
        />
      )}
      
      {showPaymentModal && (
        <PaymentModal 
          package={selectedPackage}
          bookingData={bookingData}
          onClose={closeAllModals}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
      
      {showSuccessModal && (
        <SuccessModal onClose={closeAllModals} />
      )}
    </div>
  );
};

export default TravelWebsite;