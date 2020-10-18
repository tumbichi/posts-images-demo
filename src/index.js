// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import redux from './store';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import App from './app';

// eslint-disable-next-line import/order

const { store, persistor } = redux();

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
