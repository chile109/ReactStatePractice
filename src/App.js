import './App.css';
import React from 'react';
import { ColorTextProvider } from './Context/ColorTextContext';
import ColorTextButton from './Component/ColorTextButton';
import ColorTextDisplay from './Component/ColorTextDisplay';

function App() {

  return (
    <ColorTextProvider>
      <div className="App">
        <ColorTextButton />
        <ColorTextDisplay />
      </div>
    </ColorTextProvider>
  );
}

export default App;
