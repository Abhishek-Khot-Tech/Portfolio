import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PixelTransition.css';

const PixelTransition = ({ 
  isVisible, 
  children, 
  gridSize = 20,
  duration = 0.8,
  staggerDelay = 0.02 
}) => {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const pixelArray = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      pixelArray.push({
        id: i,
        delay: Math.random() * staggerDelay * gridSize,
      });
    }
    setPixels(pixelArray);
  }, [gridSize, staggerDelay]);

  const pixelVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: duration / gridSize,
        ease: "easeOut",
      },
    }),
    exit: (delay) => ({
      opacity: 0,
      scale: 0,
      transition: {
        delay: delay * 0.5,
        duration: duration / gridSize,
        ease: "easeIn",
      },
    }),
  };

  return (
    <div className="pixel-transition-container">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="pixel-transition-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration * 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div 
        className="pixel-grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {pixels.map((pixel) => (
          <motion.div
            key={pixel.id}
            className="pixel"
            variants={pixelVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "exit"}
            custom={pixel.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelTransition;