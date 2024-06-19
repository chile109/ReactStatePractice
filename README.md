# React Hook Color Text Showcase

This project aims to learn and practice various state management methods in React, including basic React state management, Context API, Hooks (`useEffect`, `useContext`, `useReducer`, `useRef`, `useCallback`, `useMemo`), and Redux.

## Table of Contents

1. [Basic React Concepts](#basic-react-concepts)
2. [Getting Started](#getting-started)
3. [Hooks](#hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
    - [useContext](#usecontext)
    - [useReducer](#usereducer)
    - [useRef](#useref)
    - [useCallback and useMemo](#usecallback-and-usememo)
4. [Context API](#context-api)
5. [Redux](#redux)
6. [Practical Application Example](#practical-application-example)


## Basic React Concepts

React key concepts include components, state, and props. Components are the building blocks of React applications, state is the internal data of a component, and props are the external inputs to a component.

## Getting Started

To start the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/chile109/ReactStatePractice.git
    ```

2. Navigate to the project directory:
    ```sh
    cd ReactStatePractice
    ```

3. Install the dependencies:
    ```sh
    yarn install
    ```

4. Start the development server:
    ```sh
    yarn start
    ```

## Hooks

### useState

`useState` is a Hook that allows you to add state to function components. It returns a state variable and a function to update it.

```javascript
const [state, setState] = useState(initialState);
```

### useEffect

`useEffect` is a Hook that allows you to perform side effects in function components. It takes a function and a dependency array.

```javascript
useEffect(() => {
  // Your side effect code
}, [dependencies]);
```

### useContext

`useContext` is a Hook that allows you to subscribe to context within a function component. It takes a context object and returns the current context value.

```javascript
const value = useContext(MyContext);
```

### useReducer

`useReducer` is a Hook that allows you to manage state using a reducer function. It takes a reducer and an initial state, returning the current state and a dispatch function.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### useRef

`useRef` is a Hook that returns a mutable ref object. The `.current` property can hold a mutable value that persists across renders.

```javascript
const ref = useRef(initialValue);
```

### useCallback and useMemo

`useCallback` returns a memoized callback function, and `useMemo` returns a memoized value. They are used to optimize performance and prevent unnecessary re-renders.

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## Context API

The Context API allows you to pass data through the component tree without manually passing props at every level. Create a context object and use a `Provider` to supply the data, and use `useContext` or `Context.Consumer` to consume it.

```javascript
const MyContext = createContext(defaultValue);

<MyContext.Provider value={value}>
  <MyComponent />
</MyContext.Provider>
```

## Redux

Redux is a state management library for JavaScript applications. It stores the application state in a global object and allows state updates via dispatching actions. Key concepts include Store, Action, and Reducer.

```sh
yarn add redux react-redux @reduxjs/toolkit
```


```javascript
const store = createStore(reducer);

store.dispatch({ type: 'ACTION_TYPE', payload: value });
```

### Example Usage

Here's a simple example using Redux to manage state:

```javascript
// actions.js
export const changeColor = () => ({ type: 'CHANGE_COLOR' });
export const changeText = () => ({ type: 'CHANGE_TEXT' });

// reducer.js
const initialState = {
  color: 'blue',
  text: 'Hello, World!',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: state.color === 'blue' ? 'red' : 'blue' };
    case 'CHANGE_TEXT':
      return { ...state, text: state.text === 'Hello, World!' ? 'Goodbye, World!' : 'Hello, World!' };
    default:
      return state;
  }
};

// store.js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

## Practical Application Example

Combining Context and Redux to manage color and text states, while using `useRef` to track click counts.

### Context and Redux Integration

```javascript
// ColorTextContext.js
import React, { createContext, useRef, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor, changeText } from '../Redux/Action';

export const ColorTextContext = createContext();

export const ColorTextProvider = ({ children }) => {
  const colorClickRef = useRef(0);
  const textClickRef = useRef(0);
  const dispatch = useDispatch();

  const incrementColorClicks = useCallback(() => {
    colorClickRef.current += 1;
  }, []);

  const incrementTextClicks = useCallback(() => {
    textClickRef.current += 1;
  }, []);

  const contextValue = useMemo(() => ({
    colorClicks: colorClickRef.current,
    textClicks: textClickRef.current,
    incrementColorClicks,
    incrementTextClicks,
    changeColor: () => {
      dispatch(changeColor());
      incrementColorClicks();
    },
    changeText: () => {
      dispatch(changeText());
      incrementTextClicks();
    },
  }), [dispatch, incrementColorClicks, incrementTextClicks]);

  return (
    <ColorTextContext.Provider value={contextValue}>
      {children}
    </ColorTextContext.Provider>
  );
};
```

### Display Component

```javascript
// ColorTextDisplay.js
import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ColorTextContext } from '../Context/ColorTextContext';

const ColorTextDisplay = () => {
  const { colorClicks, textClicks } = useContext(ColorTextContext);
  const color = useSelector(state => state.color);
  const text = useSelector(state => state.text);

  useEffect(() => {
    console.log(`Color changed to: ${color}`);
  }, [color]);

  useEffect(() => {
    console.log(`Text changed to: ${text}`);
  }, [text]);

  return (
    <div>
      <h1 style={{ color }}>{text}</h1>
      <p>Color change clicks: {colorClicks}</p>
      <p>Text change clicks: {textClicks}</p>
    </div>
  );
};

export default ColorTextDisplay;
```

### Button Component

```javascript
// ColorTextButton.js
import React, { useContext } from 'react';
import { ColorTextContext } from '../Context/ColorTextContext';

const ColorTextButton = () => {
  const { changeColor, changeText } = useContext(ColorTextContext);

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
};

export default ColorTextButton;
```
