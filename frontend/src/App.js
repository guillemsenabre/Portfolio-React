import './styles/App.css';
import Header from './components/Header.js';
import Image1 from './components/Image1.js';
import Text1 from './components/MainText.js';
//import CircleDrawing from './components/Circles';

function App() {
  return (
    <div className = "App">
      <Header />

      <div className = "contentContainer">
        <Text1 />
        <Image1 />

      </div>
    </div>
  );
}

export default App;
