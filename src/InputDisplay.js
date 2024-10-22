import React from 'react';
import './StringCalculator.css'; // Use the same CSS file for simplicity

const InputDisplay = ({ inputValue, setInputValue, calculateSum, clearInput }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="input"
      />
      
      <button onClick={calculateSum} className="button">
        Calculate Sum
      </button>
      
      <button onClick={clearInput} className="clearButton">
        Clear
      </button>
    </div>
  );
};

export default InputDisplay;
