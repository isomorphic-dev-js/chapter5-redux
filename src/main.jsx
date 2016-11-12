import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { Provider } from 'react-redux';
import initRedux from './init-redux.es6';
require('./style.css');

const initialState = window.__INITIAL_STATE;
const store = initRedux(initialState);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('react-content')
);
