import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import PageTransition from './layouts/PageTransition';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import DevDashboard from './pages/DevDashboard';

import './index.css';

// Create a wrapper component to use the useLocation hook for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/dev" element={<DevDashboard />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        {/* We'll move the footer out or handle per-page basis later, but keep it global for now */}
      </div>
    </Router>
  );
}

export default App;
