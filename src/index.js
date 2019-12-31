import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  colors: {},
  startTime: Date.now()
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COLOR':
      return { 
        ...state, 
        colors: { 
          ...state.colors,
          [action.n]: action.color
        }
      }
    case 'UPDATE_COUNT':
      const { numColorUpdates } = action
      return {
        ...state,
        numColorUpdates
      }
    default:
      return state
  }
}

const numElements = 100
let numColorUpdates = 0
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App numElements={numElements} />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function setColor(n) {
  if (n > numElements) n = n % numElements
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
  store.dispatch({
    type: 'ADD_COLOR',
    n,
    color: randomColor
  })
  numColorUpdates++
  store.dispatch({
    type: 'UPDATE_COUNT',
    numColorUpdates
  })
  setTimeout(() => setColor(n), 0)
}

for (let n = 1; n <= numElements; n++) {
  setColor(n)
}