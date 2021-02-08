import React from 'react';
import styled from 'styled-components';

/* --------------------------------- Styles --------------------------------- */

const StyledFooter = styled.footer`
  height: 35px;
  text-align: center;
  color: ${(props) => props.theme.secondary};

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
