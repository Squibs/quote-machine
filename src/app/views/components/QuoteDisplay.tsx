import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../state/store';

/* ------------------------------ Redux Config ------------------------------ */

const mapStateToProps = (state: AppState) => ({
  quoteAuthor: state.quotes.quotes.author,
  quoteMessage: state.quotes.quotes.quote,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

/* ---------------------------------- Types --------------------------------- */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

/* -------------------------------- Component ------------------------------- */

const QuoteDisplay: React.FC<Props> = ({ quoteAuthor, quoteMessage }: Props) => {
  const createMarkup = () => {
    return { __html: quoteMessage };
  };

  return (
    <>
      <div dangerouslySetInnerHTML={createMarkup()} />
      <i>{quoteAuthor}</i>
    </>
  );
};

export default connector(QuoteDisplay);
