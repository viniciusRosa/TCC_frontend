import React from 'react';
import ReactDOM from 'react-dom';
import Reset from './styles/Reset';
import Colors from './styles/Colors';
import App from './App';

import './styles/Colors.js';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Colors />
    <App />
  </React.StrictMode>,
  document.getElementById('root'));

