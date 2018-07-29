import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

if (process.env.NODE_ENV !== 'production') {
  // TODO Fix me dotenv not works in browser
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app(), document.getElementById('root'));
registerServiceWorker();
