import React from 'react';
import '../styles/Skills.css';

import Stats from './SkillsC/Stats.js';
import About from './SkillsC/About.js';

function Skills() {
  return (
    <div className="skillsContainer" id='skillsPage'>
      <Stats />
      <About 
        cmdImg = "/images/cmdIcon.png"
        title="About Me"
        content="G:\Senabre\Prades>"
      />
    </div>
  ); 
}

export default Skills;
