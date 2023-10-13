import '../styles/Icons.css';
import {githubLink, email} from '../config.js';

import React, {useState} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'

function Icons ({showContact}) {
    
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 3000);
      };

    return (
        <div className={`iconsContainer ${showContact ? 'fadeIn' : ''}`}>
            <a href={githubLink}>
                <img 
                    src="/images/gitInv.png" 
                    alt = "Github Img" 
                    className='githubImg'/>
            </a>
            <CopyToClipboard text = {email} onCopy={handleCopy}>
                <img 
                    src="/images/gmailInv.png" 
                    alt = "Gmail Img" 
                    className='gmailImg'
                    style={{ cursor: 'pointer' }}
                />
            </CopyToClipboard> 
            {copied && <span style={{ color: 'white' }}>Email copied!</span>}
        </div>
    );
}

export default Icons;