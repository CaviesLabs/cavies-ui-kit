import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './style-constants';
import MediumFont from '../assets/poppins/Poppins-Medium.otf';
import RegularFont from '../assets/poppins/Poppins-Regular.otf';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'hk-font-medium';
    src: local('hk-font-medium'), local('hk-font-medium'),
    url(${MediumFont});
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'hk-font-regular';
    src: local('hk-font-regular'), local('hk-font-regular'),
    url(${RegularFont});
    font-weight: 300;
    font-style: normal;
  }

  body {
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
  }
`;
