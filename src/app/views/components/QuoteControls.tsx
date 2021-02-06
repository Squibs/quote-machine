import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { quotesOperations } from '../../state/ducks/quotes';

/* ------------------------------ Redux Config ------------------------------ */

const mapStateToProps = (/* state: AppState */) => ({});

const mapDispatchToProps = { fetchQuote: quotesOperations.fetchQuote };

const connector = connect(mapStateToProps, mapDispatchToProps);

/* ---------------------------------- Types --------------------------------- */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

/* -------------------------------- Component ------------------------------- */

const QuotesControls: React.FC<Props> = ({ fetchQuote }: Props) => {
  const handleClick = () => {
    fetchQuote();
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Button
      </button>
    </>
  );
};

export default connector(QuotesControls);
