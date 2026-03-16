import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">Our Expertise</h2>
          <p className="section-subtitle">Delivering cinematic quality tailored for your specific needs.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎟️</div>
            <h3 className="service-title">Festival & Event Aftermovies</h3>
            <p className="service-desc">
              We capture the energy, the crowd, and the unforgettable moments of your event. From massive festivals to intimate gatherings, our aftermovies are designed to make viewers feel like they are right there.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💼</div>
            <h3 className="service-title">Business Promotion</h3>
            <p className="service-desc">
              Corporate videos that don't feel corporate. We tell your brand's story through engaging company movies, promotional content, and sleek commercials that drive results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
