import './styles/App.css';
import Header from './components/Header.js';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Content from './components/Content';

function App() {
  return (
    <div className = "App">
      <Header />
      
      <div className = "contentContainer">
        <Content />
      </div>
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
