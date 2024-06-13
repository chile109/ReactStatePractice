import React, { createContext, useReducer, useRef, useCallback, useMemo } from 'react';

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

  const changeColor = useCallback(() => {
    dispatch({ type: 'CHANGE_COLOR' });
    colorClickRef.current += 1;
  }, [dispatch]);

  const changeText = useCallback(() => {
    dispatch({ type: 'CHANGE_TEXT' });
    textClickRef.current += 1;
  }, [dispatch]);

  const contextValue = useMemo(() => ({
    color: state.color,
    text: state.text,
    colorClicks: colorClickRef.current,
    textClicks: textClickRef.current,
    changeColor,
    changeText
  }), [state.color, state.text, changeColor, changeText]);

  return (
    <ColorTextContext.Provider value={contextValue}>
      {children}
    </ColorTextContext.Provider>
  );
}