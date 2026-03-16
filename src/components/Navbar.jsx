import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-scrolled">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          MVG <span className="nav-logo-accent">STUDIOS</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>Work</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/contact" className={`nav-cta ${location.pathname === '/contact' ? 'active-cta' : ''}`}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
