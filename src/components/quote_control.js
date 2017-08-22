import React, { Component } from 'react';

const QuoteControl = ({ onNewQuote }) => (
  <div>
    <button onClick={onNewQuote}>New Quote</button>
    <button>Tweet</button>
  </div>
);

export default QuoteControl;
