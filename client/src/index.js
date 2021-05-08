import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LeftBar} from './pages/LeftBar'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
//    document.getElementById('root'),
//    document.getElementById('article'),
    document.getElementById('table')
);

ReactDOM.render(
  <React.StrictMode>
    <LeftBar />
  </React.StrictMode>,
//    document.getElementById('root'),
//    document.getElementById('article'),
    document.getElementById('groupsBar')
);
