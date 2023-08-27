import '../styles/Header.css';

import React, { useState, useEffect } from 'react';
import Button from './Button';

function Header() {

    const [scrollSkillBtn, setScrollSkillBtn] = useState(false);

    useEffect (() => {
        if (scrollSkillBtn) {
            const skillsRef = document.getElementById('skillsPage');
            skillsRef.scrollIntoView({behavior:'smooth'});
            setScrollSkillBtn(false);
        }
    }, [scrollSkillBtn]);

    const handleScrollToSkills = () => {
        setScrollSkillBtn(true);
      };

    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Button onClick={handleScrollToSkills}>ABOUT</Button></li>
                    <li className = "contactButton"><Button>CONTACT</Button></li>
                    <li><Button>PROJECTS</Button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;