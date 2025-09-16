import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './RibbonsArrowTracker.css';

const RibbonsArrowTracker = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="ribbons-tracker-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      
      {isHovering && (
        <>
          <motion.div
            className="ribbon ribbon-1"
            animate={{
              x: mousePosition.x - 10,
              y: mousePosition.y - 10,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
          <motion.div
            className="ribbon ribbon-2"
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
          />
          <motion.div
            className="ribbon ribbon-3"
            animate={{
              x: mousePosition.x - 30,
              y: mousePosition.y - 30,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          />
        </>
      )}
    </div>
  );
};

export default RibbonsArrowTracker;