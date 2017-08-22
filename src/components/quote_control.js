import React from 'react';

const QuoteControl = ({ getNewQuote, quote, author }) => {
  const onTweetQuote = () => {
    // convert jsx elements to strings
    const div = document.createElement('div');
    div.innerHTML = quote[0].props.dangerouslySetInnerHTML.__html;
    const text = (div.textContent || div.innerText || '').trim();

    div.innerHTML = author[0].props.dangerouslySetInnerHTML.__html;
    const person = (div.textContent || div.innerText || '').trim();

    window.open(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp,SquibsVids&text="${text}" - ${person}`);
  };

  return (
    <div className="quote-control">
      <button onClick={() => getNewQuote()}>Quote</button>
      <button onClick={() => onTweetQuote()}>
        <span className="fa-stack fa-2x">
          <i className="fa fa-square-o fa-stack-2x" />
          <i className="fa fa-twitter fa-stack-1x" />
        </span>
      </button>
    </div>
  );
};

export default QuoteControl;
