// this is for use of the css prop https://styled-components.com/docs/api#css-prop
import type {} from 'styled-components/cssprop'; // import as type
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './app/views/App';
import configureStore from './app/state/store';
import 'normalize.css';

const reduxStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={reduxStore}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
