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
        title="Command Prompt"
        content="Welcome to the React Command Prompt. Type your commands here..."
      />
    </div>
  ); 
}

export default Skills;
