import styled from 'styled-components';
import { StyleColors } from '../../styles/style-constants';
import { StyledButtonProps } from './types';

/** @dev This helper will used for render value base on disabled value  */
const whenDisabled = (
  props: StyledButtonProps,
  c_val: string,
  i_val: string,
) => {
  return props.disabled ? c_val : i_val;
};

/**
 * @dev Render styles following shape type of component
 * @dev Render styles for primary shape
 * @dev Render styles for secondary shape
 * @param props
 * @returns style
 */
const withShape = (props: StyledButtonProps) => {
  const { shape } = props;
  if (shape === 'secondary') {
    return `
      border: 1px solid ${whenDisabled(
        props,
        StyleColors.dark[40],
        StyleColors.primary.purple,
      )};
      color: ${whenDisabled(
        props,
        StyleColors.dark[40],
        StyleColors.primary.purple,
      )};
      background: ${StyleColors.white};
      &:after {
        background: ${StyleColors.primary.purple};
      }
    `;
  }

  return `
    border: none;
    color: ${StyleColors.white};
    background: ${
      props.disabled ? StyleColors.dark[40] : StyleColors.primary.purple
    };
    &:after {
      background: ${StyleColors.secondary.purple[50]};
    };
`;
};

/**
 * @dev Render styles following size of component
 * @dev Render styles for large size
 * @dev Render styles for medium size
 * @dev Render styles for smallsize
 * @param props
 * @returns style
 */
const withSize = (props: StyledButtonProps) => {
  const { size } = props;
  if (size === 'large') {
    return `
      font-size: 16px;
      padding: 14px 16px;
    `;
  } else if (size === 'small') {
    return `
      font-size: 14px;
      padding: 12px 5px;
    `;
  }

  return `
    font-size: 16px;
    padding: 12px 16px;
  `;
};

/**
 * @dev Style component
 */
export const StyledButton = styled.button<StyledButtonProps>`
  cursor: ${props => whenDisabled(props, '', 'pointer')};
  display: inline-block;
  border-radius: 4px;
  margin-left: 20px;
  font-family: hk-font-medium;
  line-height: 22px;
  position: relative;
  span {
    z-index: 2;
    position: relative;
  }
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: all 0.35s;
    border-radius: 4px;
  }
  &:hover {
    color: #ffffff;
  }
  &:hover:after {
    width: ${props => whenDisabled(props, '0%', '100%')};
  }

  ${withShape}
  ${withSize}

  .circle {
    height: 25px;
    width: 25px;
    background-color: rgba(255, 255, 255);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    pointer-events: none;
    transform: scale(0);
  }

  @keyframes grow {
    0% {
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(1);
      z-index: 2;
    }

    100% {
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(30);
      opacity: 0;
      z-index: -1;
    }
  }

  .grow {
    animation: grow 1.4s ease-out forwards;
  }

  .shrink {
    animation: shrink 0.3s forwards alternate;
  }

  .jiggle {
    animation: jiggle 3s forwards ease-in-out;
  }

  @keyframes shrink {
    0% {
    }

    100% {
      transform: scale(0.9);
    }
  }

  @keyframes jiggle {
    0% {
      transform: scale(0.9);
    }

    10% {
      transform: scale(1.1);
    }

    20% {
      transform: scale(0.9);
    }

    30% {
      transform: scale(1.05);
    }

    40% {
      transform: scale(0.95);
    }

    50% {
      transform: scale(1.025);
    }

    60% {
      transform: scale(0.975);
    }

    70% {
      transform: scale(1.02);
    }

    80% {
      transform: scale(0.985);
    }

    90% {
      transform: scale(1.01);
    }

    100% {
      transform: scale(1);
    }
  }

  .shrink-button {
    animation: shrink-button 2s forwards ease-in-out;
  }

  @keyframes shrink-button {
    0% {
    }

    20% {
      transform: scale(0.1, 1);
    }

    25% {
      transform: scale(0.2, 1);
    }

    /*   30% { transform: scale(.1, 1); } */
    100% {
      transform: scale(0);
    }
  }
`;
