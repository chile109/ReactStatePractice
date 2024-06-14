const initialState = {
    color: 'red',
    text: 'Hello, World!'
  }

  const reducer = (state = initialState, action) => {
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

  export default reducer;