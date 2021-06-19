import React from 'react';
import ReactDOM from 'react-dom';
import App from '@Assets/App/App';
import '@Assets/styles/index.scss';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('.app')
);

reportWebVitals();
