import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* Background Graphic elements to simulate a dynamic environment */}
      <div 
        className="hero-bg"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <div className="container hero-content">
        <h1 className="hero-title animate-fade">
          <span className="text-gradient">Capture</span> The Moment.<br />
          <span className="text-secondary">Ignite The Story.</span>
        </h1>
        <p className="hero-subtitle animate-fade" style={{ animationDelay: '0.2s' }}>
          MVG Studios specializes in high-impact festival aftermovies and premium business promotional content.
        </p>
        <div className="hero-cta animate-fade" style={{ animationDelay: '0.4s' }}>
          <button className="btn btn-primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth'})}>
            View Showreel
          </button>
          <button className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Get in Touch
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
