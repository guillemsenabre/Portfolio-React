import React, { useState, useEffect } from 'react';
import '../../styles/ContentCss/Image1.css';
import Contact from './Contact';

function Image1({ showContact }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    if (showContact) {
      setIsFadingOut(true);
      

      // After X seconds, stop fading out and show the contact component -> NEEDS TO BE EQUAL TO THE FADE OUT TIME
      setTimeout(() => {
        setIsFadingOut(false);
        setShowImage(false);
      }, 1500);
    } else {
        setShowImage(true);
    }
  }, [showContact]);

  return (
    <div className='rightContainer'>
        {showImage && (
            <img 
                src="/images/gui_cube_blur.png" 
                alt="Test" 
                className={`guiCube ${isFadingOut ? 'hidden' : ''}`}
            />
        )}
        {showContact && !isFadingOut && <Contact />}
    </div>
  );
}

export default Image1;
