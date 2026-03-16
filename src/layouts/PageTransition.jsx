import React from 'react';
import { motion } from 'framer-motion';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  // A sleek, optic light leak effect transition
  // We use Framer Motion to orchestrate 3 distinct elements during the route change:
  // 1. The out-going page fading
  // 2. A vibrant, fast-moving color burn (simulating a cinematic lens flare/leak)
  // 3. The incoming page fading in

  return (
    <>
      {/* The Light Leak Overlay - triggers on enter/exit */}
      <motion.div
        className="optic-leak"
        initial={{ left: '-100%', opacity: 0 }}
        animate={{ left: '100%', opacity: [0, 1, 0] }}
        exit={{ left: '-100%', opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      <motion.div
        className="optic-leak secondary-leak"
        initial={{ top: '-100%', opacity: 0 }}
        animate={{ top: '100%', opacity: [0, 0.5, 0] }}
        exit={{ top: '-100%', opacity: [0, 0.5, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
      />

      {/* Actual Page Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          filter: 'blur(0px)'
        }}
        exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} // Custom easeOut Quint for cinematic feel
        className="page-wrapper"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
