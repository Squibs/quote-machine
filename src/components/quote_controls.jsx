import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchQuote, clearQuote } from '../actions';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

class QuoteControls extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuote(); // initial quote retrieval
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchQuote();
    this.props.clearQuote();
  }

  currentQuoteInfo() {
    if (this.props.quote[0]) {
      const div = document.createElement('div');
      div.innerHTML = this.props.quote[0].content;
      const text = div.innerText.trim();

      div.innerHTML = this.props.quote[0].title;
      const person = div.innerText.trim();

      return `https://twitter.com/intent/tweet?related=freecodecamp,SquibsVids&text="${text}" - ${person}`;
    }

    return 'ERROR RETRIEVING TWEET';
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="quote-control">
        <button type="submit" id="new-quote">Quote</button>
        <a
          target="_blank"
          href={this.currentQuoteInfo()}
          id="tweet-quote"
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </form>
    );
  }
}

function mapStateToProps({ quote }) {
  return { quote };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuote, clearQuote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteControls);
