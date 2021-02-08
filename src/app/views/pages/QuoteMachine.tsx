import React from 'react';
import styled from 'styled-components';
import { QuoteControls, QuoteDisplay } from '../containers';

/* --------------------------------- Styles --------------------------------- */

const QuoteMachineContent = styled.div`
  flex: 1;
`;

/* -------------------------------- Component ------------------------------- */

const QuoteMachine: React.FC = () => {
  return (
    <QuoteMachineContent>
      <QuoteControls />
      <QuoteDisplay />
    </QuoteMachineContent>
  );
};

export default QuoteMachine;
