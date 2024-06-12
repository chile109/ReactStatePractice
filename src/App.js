import './App.css';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("red");
  const [text, setText] = useState('Hello, World!');

  const changeColor = () => {
    setColor(preColor => preColor === "red" ? "blue" : "red");
  }

  const changeText = () => {
    setText(preText => preText === 'Hello, World!' ? 'Hello, React!' : 'Hello, World!');
  }

  return (
    <div className="App">
      <h1 style={{ color }}>{text}</h1>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
}

export default App;
