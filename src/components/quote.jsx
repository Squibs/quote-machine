import React, { Component } from 'react';
import { connect } from 'react-redux';

// https://github.com/FortAwesome/react-fontawesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch';

/* eslint-disable react/prefer-stateless-function */

class Quote extends Component {
  render() {
    // return loading circle w/ notch
    if (!this.props.quote[0]) {
      return (
        <div className="quote-box">
          <FontAwesomeIcon className="quote-load" icon={faCircleNotch} size="6x" spin />
        </div>
      );
    }

    return (
      <div className="quote-box">
        <p className="quote-text" dangerouslySetInnerHTML={{ __html: this.props.quote[0].content }} />
        <span className="quote-author" dangerouslySetInnerHTML={{ __html: this.props.quote[0].title }} />
      </div>
    );
  }
}

function mapStateToProps({ quote }) {
  return { quote };
}

export default connect(mapStateToProps)(Quote);
