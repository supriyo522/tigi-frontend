import React, { useState } from 'react';
import './StringCalculator.css';
import InputDisplay from './InputDisplay';

const StringCalculator = () => {
  // State to hold the input value, result, and error
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  
  // Function to validate input and calculate sum
  const calculateSum = () => {
    setError(null);
    setResult(null);

    if (!inputValue) {
      setError('Please enter some numbers.');
      return;
    }

    const numbersArray = inputValue.split(',').map(num => num.trim());

    if (numbersArray.some(num => isNaN(num))) {
      setError('Invalid input! Please enter only numbers separated by commas.');
      return;
    }

    const negativeNumbers = numbersArray.filter(num => parseFloat(num) < 0);
    if (negativeNumbers.length > 0) {
      setError(`Negative numbers are not allowed: ${negativeNumbers.join(', ')}`);
      return;
    }

    const sum = numbersArray
      .map(num => parseFloat(num))
      .reduce((acc, curr) => acc + curr, 0);
    
    setResult(sum);
  };

  // Function to clear the input and result
  const clearInput = () => {
    setInputValue('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <InputDisplay
        inputValue={inputValue}
        setInputValue={setInputValue}
        calculateSum={calculateSum}
        clearInput={clearInput}
      />
      {error && <div className="error">Error: {error}</div>}
      {result !== null && !error && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default StringCalculator;
