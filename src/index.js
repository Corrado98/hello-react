import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CurrencyList from "./CurrencyList/CurrencyList";

ReactDOM.render(<CurrencyList />, document.getElementById('root'));
registerServiceWorker();
