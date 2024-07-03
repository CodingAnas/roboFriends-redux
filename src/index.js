import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createStore,
  combineReducers,
  applyMiddleware 
} from '@reduxjs/toolkit';
import { searchRobots, reqRobots } from './reducers';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import App from './Container/App';
import './index.css';
import 'tachyons';

const rootReducer = combineReducers({searchRobots, reqRobots})
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
