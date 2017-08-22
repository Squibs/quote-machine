import React, { Component } from 'react';

class QuoteControl extends Component {
  constructor(props) {
    super(props);
  }

  onGetNewQuote() {
    this.props.GetNewQuote();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onGetNewQuote()}>Quote</button>
        <button>Tweet</button>
      </div>
    );
  }
}

export default QuoteControl;
