import React from 'react';
import './ElectricBorder.css';

const ElectricBorder = ({ children, className = '', intensity = 'medium' }) => {
  return (
    <div className={`electric-border electric-border--${intensity} ${className}`}>
      <div className="electric-border__content">
        {children}
      </div>
      <div className="electric-border__glow"></div>
    </div>
  );
};

export default ElectricBorder;