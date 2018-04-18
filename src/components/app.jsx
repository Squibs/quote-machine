import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import QuoteControls from './quote_controls';
import Quote from './quote';

/* eslint-disable react/prefer-stateless-function */

class App extends Component {
  render() {
    return (
      <div>
        <QuoteControls />
        <Quote />
        <footer className="footer text-muted">
          <div className="footer-block">
            Created and Designed by <a href="https://github.com/Squibs" target="_blank" rel="noopener noreferrer">Zachary Holman</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default hot(module)(App);
