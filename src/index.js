import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import QuoteBox from './components/quote_box';
import QuoteControl from './components/quote_control';

import './stylesheets/main.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: [],
      author: '',
    };

    this.GetNewQuote();
  }

  GetNewQuote() {
    const init = {
      method: 'GET',
      mode: 'cors',
    };

    // using ES6 fetch; not sure if I am using this correctly at all
    // random date variable at the end to get new response every time:
    // setting cach: 'no-cache' or 'reload' or anything wasn't working for me
    fetch(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp&ts=${(new Date().getTime())}`, init)
      .then(response => response.text())
      .then((responseText) => {
        const data = JSON.parse(responseText.slice(5, -1))[0];
        this.setState({
          quote: [React.DOM.div({
            dangerouslySetInnerHTML: { __html: data.content },
            key: data.ID,
          })],
          author: data.title,
        });
      });
  }

  render() {
    return (
      <div>
        <QuoteBox quote={this.state.quote} author={this.state.author} />
        <QuoteControl GetNewQuote={() => this.GetNewQuote()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));