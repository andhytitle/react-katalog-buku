import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/App.css';

// Render Dom

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
