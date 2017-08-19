import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <Counter
          onButtonPress={() => this.setState({ count: this.state.count + 1 })}
          count={this.state.count}
        />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
