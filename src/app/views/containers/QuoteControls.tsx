import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
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

/* --------------------------------- Styles --------------------------------- */

const QuoteControlContainer = styled.header`
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: ${(props) => props.theme.secondary};
  flex: none;
`;

const GetQuoteButton = styled.button`
  width: 25%;
  min-width: 100px;
  height: 46px;
  margin: 7px;
  background-color: ${(props) => props.theme.secondary};
  border: 5px solid ${(props) => props.theme.accent};
  border-radius: 5px;
  color: ${(props) => props.theme.accent};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
`;

const TwitterLink = styled.a`
  position: absolute;
  top: 5px;
  right: 2.5%;
  color: ${(props) => props.theme.twitterBlue};
  border-color: ${(props) => props.theme.secondary};
  cursor: pointer;

  // outline fontawesome icon/svg
  & .fa-twitter {
    stroke: ${(props) => props.theme.accent};
    stroke-width: 15;
  }

  @media screen and (max-width: 300px) {
    position: relative;
    right: 0%;
    padding-left: 5px;
  }
`;

/* -------------------------------- Component ------------------------------- */

const QuotesControls: React.FC<Props> = ({ fetchQuote, clearQuote, quote }: Props) => {
  const handleGetQuote = () => {
    clearQuote(); // to show spinner when getting new quote
    fetchQuote();
  };

  const generateTweetURL = () => {
    const tweetLink = (url?: string) => {
      type NoURL = {
        onClick: () => void;
      };

      type WithURL = {
        target: string;
        href: typeof url;
        rel: string;
      };

      const generateButton = (props: NoURL | WithURL) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TwitterLink {...props}>
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </TwitterLink>
      );

      // if no url; have an alert instead of navigation event
      if (!url) {
        // eslint-disable-next-line no-alert
        return generateButton({ onClick: () => alert('No quote is available.') });
      }

      // if there is a url insert it into anchor
      return generateButton({ target: '_blank', href: url, rel: 'noreferrer' });
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
    <QuoteControlContainer>
      <GetQuoteButton onClick={handleGetQuote}>Quote</GetQuoteButton>
      {generateTweetURL()}
    </QuoteControlContainer>
  );
};

export default connector(QuotesControls);
