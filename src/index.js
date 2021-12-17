import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { isIE } from 'react-device-detect'


import App from './App';
import reportWebVitals from './reportWebVitals';

if(isIE){ReactDOM.render(<h1>Пожалуйста, откройте этот сайт в любом современном браузере, Internet Explorer не поддерживается</h1>,document.getElementById('root'))}
else{
ReactDOM.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
