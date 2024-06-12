import './App.css';
import React, { useState } from 'react';
import { ColorTextContext, ColorTextProvider } from './Context/ColorTextContext';
import ColorTextButton from './Component/ColorTextButton';
import ColorTextDisplay from './Component/ColorTextDisplay';

function App() {

  return (
    <ColorTextProvider>
      <div classname="App">
        <ColorTextButton />
        <ColorTextDisplay />
      </div>
    </ColorTextProvider>
  );
}

export default App;
