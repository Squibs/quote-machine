import React from 'react';

const QuoteBox = ({ quote, author }) => {
  const loadingStyle = {
    marginTop: '85px',
  };

  // if no quote show loading bar
  if (!quote[0]) {
    return (
      <div className="quote-box">
        <div className="quote-text" style={loadingStyle}>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        </div>
      </div>
    );
  }

  return (
    <div className="quote-box">
      <div className="quote-text">{quote}</div>
      <div className="quote-author">{author}</div>
    </div>
  );
};

export default QuoteBox;
