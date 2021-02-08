import React from 'react';
import { Footer } from '../components';
import { QuoteControls, QuoteDisplay } from '../containers';

/* -------------------------------- Component ------------------------------- */

const QuoteMachine: React.FC = () => {
  return (
    <>
      <QuoteControls />
      <QuoteDisplay />
      <Footer />
    </>
  );
};

export default QuoteMachine;
