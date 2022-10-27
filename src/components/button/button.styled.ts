import styled from 'styled-components';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { tuple } from '../../utils';
import { StyleColors } from '../../styles/style-constants';

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
    return props.disabled ? StyleColors.dark[40] : StyleColors.primary.purple;
  } else if (props.shape === 'secondary') {
    return StyleColors.white;
  }
};

/** @dev Render button's text color */
const textColor = () => (props: Props) => {
  if (props.shape === 'primary') {
    return StyleColors.white;
  } else if (props.shape === 'secondary') {
    return props.disabled ? StyleColors.dark[40] : StyleColors.primary.purple;
  }
};

/** @dev Render button's border */
const border = () => (props: Props) => {
  if (props.shape === 'primary') {
    return 'none';
  } else if (props.shape === 'secondary') {
    return props.disabled
      ? `1px solid ${StyleColors.dark[40]}`
      : `1px solid ${StyleColors.primary.purple}`;
  }
};

/** @dev Render wave effect color */
const waveColor = () => (props: Props) => {
  if (props.shape === 'primary') {
    return StyleColors.secondary.purple[50];
  } else if (props.shape === 'secondary') {
    return StyleColors.primary.purple;
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
