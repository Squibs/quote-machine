import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <button onClick={props.onButtonPress}>
    Count: {props.count}
  </button>
);

Counter.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Counter;
