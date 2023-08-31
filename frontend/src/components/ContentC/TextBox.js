import React, { useState } from 'react';
import '../../styles/ContentCss/TextBox.css';

function TextBox() {
  const [textInput, setTextInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
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
