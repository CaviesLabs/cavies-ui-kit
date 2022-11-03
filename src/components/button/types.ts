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
const ComponentSizes = tuple('large', 'medium', 'xsmall', 'small');
export type ComponentSize = typeof ComponentSizes[number];

/** @dev Export interface props */
export type StyledButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /**
   * @dev Shape of button.
   * @enum {ButtonShape}
   */
  shape?: ButtonShape | ButtonShape[0];

  /**
   * @dev Size of button
   * @enum {ComponentSize}
   */
  size?: ComponentSize | ComponentSize[1];

  /**
   * @dev Loading status to display spinner.
   */
  loading?: boolean | false;

  /**
   * @dev
   * The value to check if user want to apply hover
   * wave animation to the button when hover,
   * the defaullt is true.
   */
  wave?: boolean | true;
};

/** @dev Export interface props of styled button component*/
export interface ButtonProps {
  /**
   * @dev On click callback.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * @dev Children element if having.
   */
  children?: ReactNode;

  /**
   * @dev Style of container.
   */
  containerStyle?: CSSProperties;

  /**
   * @dev Style of label.
   */
  textStyle?: CSSProperties;

  /**
   * @dev Type of button.
   * @enum {ButtonHTMLType}
   */
  type?: ButtonHTMLType;

  /**
   * @dev Shape of button.
   * @enum {ButtonShape}
   */
  shape?: ButtonShape | ButtonShape[0];

  /**
   * @dev Id for button.
   */
  id?: string;

  /**
   * @dev Text value.
   */
  text?: string;

  /**
   * @dev Class name of container.
   */
  className?: string;

  /**
   * @dev Class name of label.
   */
  textClassName?: string;

  /**
   * @dev Disable value to checked if button is inactive.
   */
  disabled?: boolean | false;

  /**
   * @dev Size of button
   * @enum {ComponentSize}
   */
  size?: ComponentSize | ComponentSize[1];

  /**
   * @dev Loading status to display spinner.
   */
  loading?: boolean | false;

  /**
   * @dev Left icon to display in left side of the label.
   */
  icon?: string;

  /**
   * @dev
   * The value to check if user want to apply hover
   * wave animation to the button when hover,
   * the defaullt is true.
   */
  wave?: boolean | true;

  /**
   * @dev Width value of button.
   * @param {string} Must be string because value can be % or px or em, etc.
   */
  width?: string;

  /**
   * @dev Height value of button.
   * @param {string} Must be string because value can be % or px or em, etc.
   */
  height?: string;
}
