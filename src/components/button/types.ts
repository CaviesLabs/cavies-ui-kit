import {
  MouseEventHandler,
  CSSProperties,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';
import { tuple } from '../../utils';

/** @dev Shape of button */
const ButtonShapes = tuple('primary', 'secondary', 'tertiary');
export type ButtonShape = typeof ButtonShapes[number];

/** @dev Html button type, this is native HTML button type */
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

/** @dev Export enum component size */
const ComponentSizes = tuple('large', 'medium', 'small');
export type ComponentSize = typeof ComponentSizes[number];

/** @dev Export interface props */
export type StyledButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  shape?: ButtonShape | ButtonShape[0];
  size?: ComponentSize | ComponentSize[1];
  loading?: boolean | false;
};

/** @dev Export interface props of styled button component*/
export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  containerStyle?: CSSProperties;
  textStyle?: CSSProperties;
  type?: ButtonHTMLType;
  shape?: ButtonShape;
  id?: string;
  text?: string;
  className?: string;
  textClassName?: string;
  disabled?: boolean | false;
  size?: ComponentSize | ComponentSize[1];
  loading?: boolean | false;
}
