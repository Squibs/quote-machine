import { createGlobalStyle } from 'styled-components';

import RTRalewayWoff from './rtraleway-regular-webfont.woff';
import RTRalewayWoff2 from './rtraleway-regular-webfont.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'rtRaleway';
    src: local('RT Raleway'), local('RTRaleway'),
    url(${RTRalewayWoff2}) format('woff2'),
    url(${RTRalewayWoff}) format('woff');
  }
`;
