import React, { useState } from 'react';

import './styles/App.css';

import Header from './components/Header.js';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Content from './components/Content';

function App() {

  const [showContact, setShowContact] = useState(false);


  return (
    <div className = "App">
      <Header showContact={showContact} setShowContact={setShowContact} /> 
      
      <div className = "contentContainer">
        <Content showContact={showContact}/>
      </div>
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
