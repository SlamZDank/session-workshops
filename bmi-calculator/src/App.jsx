import React, { useState } from 'react'
import './App.css'
import Controller from '../components/Controller'
import Result from '../components/Result';

function App() {
  const [bmi, setBmi] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  // Stable click handler using useCallback
  const handleSubmit = () => {
    if (weight > 0 && height > 0) {
      setBmi(weight / (height ** 2));
    } else {
      setBmi(0)
    }
  };

  return (
    <div className='Container'>
      <h1>🧮 BMI CALCULATOR:</h1>
      <br />
      <h2>🪨 Weight (KG):</h2>
      <Controller value={weight} setValue={setWeight} />
      <h2>📏 Height (Meters):</h2>
      <Controller value={height} setValue={setHeight} />

      {bmi > 0 && (
        <>
          <h2>🫠 Your BMI is:</h2>
          <div className="Display">{Math.round(bmi * 10) / 10}</div>
          <Result bmi={bmi} />
        </>
      )}

      <button className='Submit' onClick={handleSubmit}>
        ✅ Submit
      </button>
    </div>
  );
}

export default App
