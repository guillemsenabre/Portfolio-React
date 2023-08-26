import React from 'react';
import '../styles/Skills.css';

import Stats from './SkillsC/Stats.js';
import About from './SkillsC/About.js';

function Skills() {
  return (
    <div className="skillsContainer" id='skillsPage'>
      <Stats />
      <About />

      
    </div>
  );
}

export default Skills;
