import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { quotesOperations } from '../../state/ducks/quotes';
import { AppState } from '../../state/store';

/* ------------------------------ Redux Config ------------------------------ */

const mapStateToProps = (state: AppState) => ({
  quote: state.quotes.quotes,
});

const mapDispatchToProps = {
  fetchQuote: quotesOperations.fetchQuote,
  clearQuote: quotesOperations.clearQuote,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

/* ---------------------------------- Types --------------------------------- */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

/* -------------------------------- Component ------------------------------- */

const QuotesControls: React.FC<Props> = ({ fetchQuote, clearQuote, quote }: Props) => {
  const handleGetQuote = () => {
    clearQuote(); // to show spinner when getting new quote
    fetchQuote();
  };

  const generateTweetURL = () => {
    const tweetLink = (url?: string) => {
      if (!url) {
        const normalizeButton = {
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textDecoration: 'underline',
          display: 'inline',
          margin: 0,
          padding: 0,
        };

        // return button when there is no quote; prevents navigation away from page when it won't work
        return (
          <button
            type="button"
            style={normalizeButton}
            onClick={() => alert('No quote is available.')}
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </button>
        );
      }

      // return link when there is a quote
      return (
        <a target="_blank" href={url} rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      );
    };

    if (quote.quote !== '' && quote.author !== '') {
      const div = document.createElement('div');
      div.innerHTML = quote.quote;
      const cleanedQuote = div.textContent || div.innerText.trim() || '';

      div.innerHTML = quote.author;
      const cleanedAuthor = div.textContent || div.innerText.trim() || '';

      return tweetLink(
        `https://twitter.com/intent/tweet?related=freeCodeCamp,SquibsVids&text="${cleanedQuote}" - ${cleanedAuthor}`,
      );
    }

    return tweetLink();
  };

  return (
    <>
      <button type="button" onClick={handleGetQuote}>
        Quote
      </button>
      {generateTweetURL()}
    </>
  );
};

export default connector(QuotesControls);
