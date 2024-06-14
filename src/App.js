import './App.css';
import React from 'react';
import { ColorTextProvider } from './Context/ColorTextContext';
import ColorTextDisplay from './Component/ColorTextDisplay';

function App() {

  return (
    <ColorTextProvider>
      <div className="App">
        <ColorTextDisplay />
      </div>
    </ColorTextProvider>
  );
}

export default App;
