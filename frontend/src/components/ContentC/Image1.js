import React from 'react';

import "../../styles/ContentCss/Image1.css"

import Contact from './Contact';

function Image1({showContact}) {
    return (
        <div className='imageContainer'>
            {showContact ? (
                <Contact />
            ) : (
                <img src="/images/gui_cube_blur.png" alt="Test" className="gui_cube" />
            )}
        </div>
    );
}

export default Image1;