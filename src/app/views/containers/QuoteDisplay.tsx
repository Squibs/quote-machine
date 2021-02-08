import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { QuotesState } from '../../state/ducks/quotes/types';
import { AppState } from '../../state/store';

/* ------------------------------ Redux Config ------------------------------ */

const mapStateToProps = (state: AppState) => ({
  quote: state.quotes.quotes,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

/* ---------------------------------- Types --------------------------------- */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

/* --------------------------------- Styles --------------------------------- */

// not sure if I should put in classNames and just put styles on parent
// or make them all styled elements like I am currently
const QuoteDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  // spinner; could inline it, but ehh
  & svg {
    margin-top: 10px;
  }
`;

const QuoteTextDiv = styled.div`
  text-align: center;
  font-size: 1.75em;
  margin: 10px;
  margin-top: 10px;
`;

const QuoteAuthorI = styled.div`
  font-size: 1.25em;
  font-style: italic;
  text-align: center;
`;

/* -------------------------------- Component ------------------------------- */

const QuoteDisplay: React.FC<Props> = ({ quote }: Props) => {
  // show spinner if no quote
  const renderQuote = () => {
    if (!quote.quote || !quote.author) {
      return <FontAwesomeIcon icon={faCircleNotch} size="6x" spin />;
    }

    return (
      <>
        {/* eslint-disable-next-line react/no-danger */}
        <QuoteTextDiv dangerouslySetInnerHTML={{ __html: quote.quote }} />
        <QuoteAuthorI>{quote.author}</QuoteAuthorI>
      </>
    );
  };

  return <QuoteDisplayContainer>{renderQuote()}</QuoteDisplayContainer>;
};

export default connector(QuoteDisplay);
