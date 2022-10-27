import styled from 'styled-components';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { tuple } from '../../utils';

/** @dev Shape of button */
const ButtonShapes = tuple('primary', 'secondary', 'tertiary');
export type ButtonShape = typeof ButtonShapes[number];

/** @dev Html button type, this is native HTML button type */
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

/** @dev Export interface props */
export type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { shape?: ButtonShape | ButtonShape[0] };

/** @dev This helper will used for render value base on disabled value  */
const whenDisabled = (c_val: string, i_val: string) => {
  return (props: Props) => {
    return props.disabled ? c_val : i_val;
  };
};

/** @dev Render button's background */
const background = () => (props: Props) => {
  if (props.shape === 'primary') {
    return props.disabled ? '#96A1B5' : '#735cf7';
  } else if (props.shape === 'secondary') {
    return '#FFFFFF';
  }
};

/** @dev Render button's text color */
const textColor = () => (props: Props) => {
  if (props.shape === 'primary') {
    return '#FFFFFF';
  } else if (props.shape === 'secondary') {
    return props.disabled ? '#96A1B5' : '#735CF7';
  }
};

/** @dev Render button's border */
const border = () => (props: Props) => {
  if (props.shape === 'primary') {
    return 'none';
  } else if (props.shape === 'secondary') {
    return props.disabled ? '1px solid #96A1B5' : '1px solid #735CF7';
  }
};

/** @dev Render wave effect color */
const waveColor = () => (props: Props) => {
  if (props.shape === 'primary') {
    return '#8876f0';
  } else if (props.shape === 'secondary') {
    return '#735CF7';
  }
};

export const StyledButton = styled.button<Props>`
  cursor: ${whenDisabled('', 'pointer')};
  background: ${background()};
  color: ${textColor()};
  border: ${border()};
  padding: 15px 16px;
  display: inline-block;
  font-size: 16px;
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
    background: ${waveColor()};
    transition: all 0.35s;
    border-radius: 4px;
  }
  &:hover {
    color: #ffffff;
  }
  &:hover:after {
    width: ${whenDisabled('0%', '100%')};
  }
`;
