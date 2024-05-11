// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QuizApp from './QuizApp';
import rootReducer from './reducers';

// Create a Redux store
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QuizApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);