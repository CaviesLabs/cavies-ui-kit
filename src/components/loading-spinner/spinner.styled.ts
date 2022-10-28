import styled from 'styled-components';
import { StyleColors } from '../../styles/style-constants';

export interface SpinnerProps {
  width: number;
  height: number;
  color: string;
}

export const StyledSpinner = styled.div<SpinnerProps>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  border: 2px solid ${props => props.color};
  border-top: 2px solid ${StyleColors.transparent};
  border-radius: 50%;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 1.2s;
  -webkit-animation-name: rotate;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  -moz-transition-property: -moz-transform;
  -moz-animation-name: rotate;
  -moz-animation-duration: 1.2s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;

  transition-property: transform;
  animation-name: rotate;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
