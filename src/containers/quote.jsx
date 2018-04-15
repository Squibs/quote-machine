import React, { Component } from 'react';
import { connect } from 'react-redux';

// https://github.com/FortAwesome/react-fontawesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch';

/* eslint-disable react/prefer-stateless-function */

class Quote extends Component {
  render() {
    if (!this.props.quote[0]) {
      return (
        <FontAwesomeIcon icon={faCircleNotch} size="6x" spin />
      );
    }

    return (
      <div>
        <p dangerouslySetInnerHTML={{ __html: this.props.quote[0][0].content }} />
        <span>{this.props.quote[0][0].title}</span>
      </div>
    );
  }
};

function mapStateToProps({ quote }) {
  return { quote };
}

export default connect(mapStateToProps)(Quote);
