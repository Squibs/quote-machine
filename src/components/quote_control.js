import React from 'react';

const QuoteControl = ({ getNewQuote, quote, author }) => {
  const onTweetQuote = () => {
    console.log(quote[0].props.dangerouslySetInnerHTML.__html);

    // convert jsx elements to strings
    const div = document.createElement('div');
    div.innerHTML = quote[0].props.dangerouslySetInnerHTML.__html;
    const text = (div.textContent || div.innerText || '').trim();

    div.innerHTML = author[0].props.dangerouslySetInnerHTML.__html;
    const person = (div.textContent || div.innerText || '').trim();

    window.open(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp,SquibsVids&text="${text}" - ${person}`);
  };

  return (
    <div>
      <button onClick={() => getNewQuote()}>Quote</button>
      <button onClick={() => onTweetQuote()}>Tweet</button>
    </div>
  );
};

export default QuoteControl;
