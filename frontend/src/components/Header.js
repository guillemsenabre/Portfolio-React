import '../styles/Header.css';

import React, { useState, useEffect } from 'react';

import Button from './Button';

function Header({ showContact, setShowContact }) {

    const [scrollSkillBtn, setScrollSkillBtn] = useState(false);
    const [scrollProjectsBtn, setScrollProjectsBtn] = useState(false);

    useEffect (() => {
        if (scrollSkillBtn) {
            const skillsRef = document.getElementById('skillsPage');
            skillsRef.scrollIntoView({behavior:'smooth'});
            setScrollSkillBtn(false);
        } 
        
        if (scrollProjectsBtn){
            const projectsRef = document.getElementById('projectsPage');
            projectsRef.scrollIntoView({behavior:'smooth'});
            setScrollProjectsBtn(false);

        }
    }, [scrollSkillBtn, scrollProjectsBtn]);

    const handleScrollToSkills = () => {
        setScrollSkillBtn(true);
      };

    const handleScrollToProjects = () => {
        setScrollProjectsBtn(true);
    }

    const toggleContact = () => {
        setShowContact(!showContact);
    };

    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Button onClick={handleScrollToSkills}>ABOUT</Button></li>
                    <li className = "contactButton">
                        <Button onClick={toggleContact}>CONTACT</Button>
                    </li>
                    <li><Button onClick={handleScrollToProjects}>PROJECTS</Button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
