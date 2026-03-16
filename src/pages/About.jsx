import React from 'react';
import './About.css';
import contentData from '../content.json';

const About = () => {
  const { about } = contentData;

  return (
    <div className="about-page">
      <div className="container">
        <h1 className="massive-title">THE <br/><span className="text-outline">VISION</span></h1>
        
        <div className="about-content">
          <div className="about-text-block">
            <h2 className="about-subtitle">{about.subtitle}</h2>
            <p className="about-body">
              {about.body1}
            </p>
            <p className="about-body">
              {about.body2}
            </p>
          </div>
          
          <div className="about-image-wrapper">
             <img src={about.image} alt="Behind the scenes camera" className="editorial-portrait" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
