import React from 'react';
import { motion } from 'framer-motion';
import './LogoLoop.css';

const LogoLoop = ({ logos, speed = 30, direction = 'left' }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-loop-container">
      <motion.div
        className="logo-loop-track"
        animate={{
          x: direction === 'left' ? '-50%' : '50%',
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-loop-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;