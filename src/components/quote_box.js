import React from 'react';

const QuoteBox = ({ quote, author }) => {
  if (!quote[0]) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      {quote}
      {author}
    </div>
  );
};

export default QuoteBox;
