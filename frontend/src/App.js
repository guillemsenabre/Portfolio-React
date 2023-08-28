import './styles/App.css';
import Header from './components/Header.js';
import Image1 from './components/Image1.js';
import Text1 from './components/MainText.js';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className = "App">
      <Header />

      <div className = "contentContainer">
        <Text1 />
        <Image1 />
      </div>
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
