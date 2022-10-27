import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
import MediumFont from '../assets/poppins/Poppins-Medium.otf';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'hk-font-medium';
    src: local('hk-font-medium'), local('hk-font-medium'),
    url(${MediumFont});
    font-weight: 300;
    font-style: normal;
  }

  body {
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    font-family: hk-font-medium;
  }
`;
