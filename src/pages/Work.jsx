import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Work.css';
import { Play, X } from 'lucide-react';
import contentData from '../content.json';

const Work = () => {
  const { work } = contentData;
  const { projects } = work;
  const [activeVideo, setActiveVideo] = useState(null);

  // Helper to convert standard youtube links to embed links if necessary
  const getEmbedLink = (url) => {
    if (!url) return null;
    let embedUrl = url;
    if (url.includes('watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/');
    } else if (url.includes('youtu.be/')) {
      embedUrl = url.replace('youtu.be/', 'www.youtube.com/embed/');
    }
    // strip query params for clean embed
    if (embedUrl.includes('?')) {
      embedUrl = embedUrl.split('?')[0];
    }
    return embedUrl;
  };

  const handleProjectClick = (project) => {
    if (project.youtubeLink) {
      setActiveVideo(getEmbedLink(project.youtubeLink));
    }
  };

  const closeModal = () => {
    setActiveVideo(null);
  };

  return (
    <div className="work-page">
      <div className="container">
        <header className="work-header">
          <h1 className="massive-title">SELECTED <br/> WORKS</h1>
          <p className="work-intro">{work.intro}</p>
        </header>

        <div className="work-list">
          {projects.map((project, index) => (
            <div 
              className={`work-item ${project.youtubeLink ? 'has-video' : ''}`} 
              key={project.id}
              onClick={() => handleProjectClick(project)}
            >
              <div className="work-item-meta">
                <span className="work-number">{(index + 1).toString().padStart(2, '0')}</span>
                <h2 className="work-title">{project.title}</h2>
                <span className="work-year">{project.year}</span>
              </div>
              <div className="work-image-container">
                <img src={project.image} alt={project.title} className="work-image" />
                {project.youtubeLink && (
                  <div className="work-play">
                    <Play size={48} strokeWidth={1} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Video Modal */}
      {activeVideo && createPortal(
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={`${activeVideo}?autoplay=1&rel=0`} 
              title="Project Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Work;
