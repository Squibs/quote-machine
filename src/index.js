import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/main.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
