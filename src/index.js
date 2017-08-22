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
  }

  GetNewQuote(event) {
    event.preventDefault();
    console.log(event);

    const init = {
      method: 'GET',
      mode: 'cors',
    };

    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then((response) => {
        if (response.status !== 200) {
          console.log(`There is a problem. Status Code: ${response.status}`);
          return;
        }

        response.json().then((data) => {
          this.setState({
            quote: [React.DOM.div({
              dangerouslySetInnerHTML: { __html: data[0].content },
              key: data[0].ID,
            })],
            author: data[0].title,
          });
        });
      });

    // using es6 fetch; should only not be supported by ms-ie
    // fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', init)
    //   .then(response => response.json().then((responseData) => {
    //     console.log(responseData, 'responseData');
    //     const data = responseData[0];
    //     this.setState({
    //       quote: [React.DOM.div({
    //         dangerouslySetInnerHTML: { __html: data.content },
    //         key: data.ID,
    //       })],
    //       author: data.title,
    //     });
    //   }));
  }

  render() {
    return (
      <div>
        <QuoteBox quote={this.state.quote} author={this.state.author} />
        <QuoteControl onNewQuote={event => this.GetNewQuote(event)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
