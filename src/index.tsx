import React from 'react';

import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './features';
import { store } from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
