import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
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

/* -------------------------------- Component ------------------------------- */

const QuoteDisplay: React.FC<Props> = ({ quote }: Props) => {
  if (!quote.quote || !quote.author) {
    return (
      <>
        <FontAwesomeIcon icon={faCircleNotch} size="6x" spin />
      </>
    );
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: quote.quote }} />
      <i>{quote.author}</i>
    </>
  );
};

export default connector(QuoteDisplay);
