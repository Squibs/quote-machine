import React from 'react';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import { QuoteMachine } from './pages';

// typescript module for styled-components theme so autocomplete works
// should probably go in own folder, but this works for now.
// https://styled-components.com/docs/api#typescript
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    accent: string;
    twitterBlue: string;
    fontFamily: string;
  }
}

const theme: DefaultTheme = {
  primary: '#dddddd',
  secondary: '#313131',
  accent: '#ffffff',
  twitterBlue: '#1da1f3',
  fontFamily: 'RT Raleway',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.primary};
  }

  // acting as body https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
  // QuoteMachine would be main 
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QuoteMachine />
    </ThemeProvider>
  );
};

export default App;
