import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchQuote } from '../actions';

class GetQuoteButton extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchQuote();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <button type="submit" className="btn btn-secondary">Quote</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuote }, dispatch);
}

export default connect(null, mapDispatchToProps)(GetQuoteButton);
