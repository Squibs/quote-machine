import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchQuote } from '../actions';
import { clearQuote } from '../actions';

class GetQuoteButton extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuote();
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchQuote();
    this.props.clearQuote();
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
  return bindActionCreators({ fetchQuote, clearQuote }, dispatch);
}

export default connect(null, mapDispatchToProps)(GetQuoteButton);
