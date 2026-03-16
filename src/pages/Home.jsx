import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import contentData from '../content.json';
import './Home.css';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const { home } = contentData;

  return (
    <div className="home-page">
      {/* Background Deep Glows */}
      <div className="ambient-glow glow-top-right" />
      <div className="ambient-glow glow-bottom-left" />

      <section className="hero-editorial">
        <motion.div 
          className="container hero-content-editorial"
          style={{ opacity, y: y1 }}
        >
          <div className="hero-grid">
            <h1 className="massive-title">
              {home.titleLine1} <br/>
              <span className="text-outline">{home.titleLine2}</span> {home.titleLine3} <br/>
              {home.titleLine4} <br/>
              <span className="text-outline">{home.titleLine5}</span> {home.titleLine6}
            </h1>
            
            <div className="hero-meta">
              <p className="hero-desc">
                {home.description}
              </p>
              <div className="hero-actions">
                <Link to="/work" className="btn-modern">Explore Work <Play size={16} /></Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating asymmetric showcase videos */}
        <motion.div className="floating-video vid-1" style={{ y: y2 }}>
          <img src={home.vid1} alt="Showcase 1" />
        </motion.div>
        
        <motion.div className="floating-video vid-2" style={{ y: y1 }}>
          <img src={home.vid2} alt="Showcase 2" />
        </motion.div>
      </section>

      {/* Brief Manifesto Section */}
      <section className="manifesto-section container">
        <div className="manifesto-content">
          <h2 className="manifesto-text">
            WE BELIEVE IN <span className="text-gradient">{home.manifestoBold}</span>. NO SCRIPTS. JUST THE PUREST FORM OF <span className="text-secondary">{home.manifestoSecondary}</span> CAPTURED IN REAL-TIME.
          </h2>
          <div className="manifesto-footer">
            <Link to="/about" className="link-underline">Meet the Visionaries</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
