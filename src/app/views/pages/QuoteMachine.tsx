import React from 'react';
import { QuoteControls, QuoteDisplay } from '../components';

const QuoteMachine: React.FC = () => {
  return (
    <>
      <QuoteControls />
      <QuoteDisplay />
    </>
  );
};

export default QuoteMachine;
