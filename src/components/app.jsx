import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import GetQuoteButton from '../containers/get_quote_button';
import Quote from '../containers/quote';

/* eslint-disable react/prefer-stateless-function */

class App extends Component {
  render() {
    return (
      <div>
        <GetQuoteButton />
        <Quote />
      </div>
    );
  }
}

export default hot(module)(App);
