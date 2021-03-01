import React from 'react';
import styled from 'styled-components/macro';

/* --------------------------------- Styles --------------------------------- */

const StyledFooter = styled.footer`
  text-align: center;
  color: ${(props) => props.theme.secondary};
  flex: none;
  padding-bottom: 3px;

  & a {
    text-decoration-line: none;
    color: ${(props) => props.theme.twitterBlue};
  }
`;

/* -------------------------------- Component ------------------------------- */

const Footer: React.FC = () => (
  <StyledFooter>
    Created and Designed by&nbsp;
    <a href="https://github.com/Squibs" target="_blank" rel="noreferrer">
      Zachary Holman
    </a>
  </StyledFooter>
);

export default Footer;
