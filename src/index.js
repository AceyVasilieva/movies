import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './components/App/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

WebFont.load({
  google: {
    families: ['Dongle:300,400,700', 'sans-serif']
  }
});
 
const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />,
  rootElement
);
