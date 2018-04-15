import React from 'react';
import { connect } from 'react-redux';

const Quote = function ({ quote }) {
  if (!quote[0]) {
    return (
      <div>
        Get a Quote!
      </div>
    );
  }

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: quote[0][0].content }} />
      <span>{quote[0][0].title}</span>
    </div>
  );
};

function mapStateToProps({ quote }) {
  return { quote };
}

export default connect(mapStateToProps)(Quote);
