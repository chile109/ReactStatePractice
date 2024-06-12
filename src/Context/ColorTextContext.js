import React, { createContext, useState } from 'react';

export const ColorTextContext = createContext();

export const ColorTextProvider = ({ children }) => {
    const [color, setColor] = useState("red");
    const [text, setText] = useState('Hello, World!');

    const changeColor = () => {
        setColor(preColor => preColor === "red" ? "blue" : "red");
      }
    
      const changeText = () => {
        setText(preText => preText === 'Hello, World!' ? 'Hello, React!' : 'Hello, World!');
      }

      return (
        <ColorTextContext.Provider value={{color, text, changeColor, changeText}}>
            {children}
        </ColorTextContext.Provider>
      );
}