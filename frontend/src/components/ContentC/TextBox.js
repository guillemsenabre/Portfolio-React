import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/ContentCss/TextBox.css';

function TextBox() {
  const [textInput, setTextInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3000/send-email', { text: textInput });
    setSubmitted(true);
  };

  return (
    <div className="textboxContainer">
      <form onSubmit={handleInputSubmit} className='textBox'>
        <input
          type="text"
          value={textInput}
          onChange={handleInputChange}
          className="textInput"
          placeholder="Enter text and press Enter..."
        />
      </form>
      {submitted && <p className="submittedText">Submitted!</p>}
    </div>
  );
}

export default TextBox;
