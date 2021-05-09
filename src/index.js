import React from 'react';
import ReactDOM from 'react-dom'; 
import '@styles/index.css'; // импортируем файл 
import App from '@containers/App'; // импортируем всю папку -> export default

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

