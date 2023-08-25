import React from 'react';
import '../styles/Button.css'; // Create a CSS file for styling your button

function Button({ onClick, children }) {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
