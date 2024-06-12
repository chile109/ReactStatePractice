import React, { createContext, useReducer, useRef } from 'react';

const initialState = {
  color: 'red',
  text: 'Hello, World!'
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: state.color === 'red' ? 'blue' : 'red'
      };
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: state.text === 'Hello, World!' ? 'Hello, React!' : 'Hello, World!'
      };
    default:
      return state;
  }
}

export const ColorTextContext = createContext();

export const ColorTextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const colorClickRef = useRef(0);
  const textClickRef = useRef(0);

  const changeColor = () => {
    dispatch({ type: 'CHANGE_COLOR' });
    colorClickRef.current++;
  }

  const changeText = () => {
    dispatch({ type: 'CHANGE_TEXT' });
    textClickRef.current++;
  }

  return (
    <ColorTextContext.Provider value={{ color: state.color, text:state.text, changeColor, changeText, colorClicks: colorClickRef.current, textClicks: textClickRef.current }}>
      {children}
    </ColorTextContext.Provider>
  );
}