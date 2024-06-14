import React, { useState, useCallback, createContext, useRef, useMemo } from 'react';

export const ColorTextContext = createContext();

export const ColorTextProvider = ({ children }) => {
  const colorClickRef = useRef(0);
  const textClickRef = useRef(0);
  const [colorClicks, setColorClicks] = useState(colorClickRef.current);
  const [textClicks, setTextClicks] = useState(textClickRef.current);

  const incrementColorClicks = useCallback(() => {
    colorClickRef.current += 1;
    setColorClicks(colorClickRef.current);
  }, []);

  const incrementTextClicks = useCallback(() => {
    textClickRef.current += 1;
    setTextClicks(textClickRef.current);
  }, []);

  const contextValue = useMemo(() => ({
    colorClicks,
    textClicks,
    incrementColorClicks,
    incrementTextClicks
  }), [colorClicks, textClicks, incrementColorClicks, incrementTextClicks]);


  return (
    <ColorTextContext.Provider value={contextValue}>
      {children}
    </ColorTextContext.Provider>
  );
};
