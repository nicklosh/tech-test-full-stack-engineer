import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Fake data to work on ui
import Data from './data/data';

ReactDOM.render(<App data={Data} />, document.getElementById('root'));