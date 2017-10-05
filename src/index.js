import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import PersonApp from "./PersonApp"
import App from './App';
import CurrencyList from "./CurrencyList/CurrencyList";
import PersonTable from "./PersonTable/PersonTable";
import PersonForm from "./PersonTable/PersonForm"

ReactDOM.render(<PersonApp />, document.getElementById('root'));
registerServiceWorker();
