// Logo.js

import React from 'react';
import './Logo.css'; // Import the CSS file for styling
const image = {
    img:require('./components/Assets/a1.png')
}

const Logo = () => {
  return (
    
    <div className="logo-container">
      <img src={image.img} alt="" />
    </div>
  );
}

export default Logo;
