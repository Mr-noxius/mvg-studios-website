import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Summer Sound Fest', category: 'Festival', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'TechNova Corporate', category: 'Business', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Neon Nights', category: 'Event', image: 'https://images.unsplash.com/photo-1470229722913-7c090be5c520?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Nexus Brand Film', category: 'Business', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Altitude 2023', category: 'Festival', image: 'https://images.unsplash.com/photo-1533174000243-b258b3873489?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Elevate Co Overview', category: 'Company Movie', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">Featured Work</h2>
          <p className="section-subtitle">A glimpse into our recent productions across events and corporate spaces.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-img-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-img"/>
                <div className="portfolio-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-item-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <button className="btn btn-outline">View Complete Showreel</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
