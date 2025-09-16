import React from 'react';
import './AuroraBackground.css';

const AuroraBackground = ({ children, intensity = 'medium' }) => {
  return (
    <div className={`aurora-background aurora-background--${intensity}`}>
      <div className="aurora-layer aurora-layer-1"></div>
      <div className="aurora-layer aurora-layer-2"></div>
      <div className="aurora-layer aurora-layer-3"></div>
      <div className="aurora-content">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;