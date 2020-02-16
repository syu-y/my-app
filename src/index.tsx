import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import './config';

// persistor.purge();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
    document.getElementById("root") as HTMLElement
);

serviceWorker.unregister();
