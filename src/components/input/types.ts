import { ChangeEvent, CSSProperties, ReactNode } from 'react';

/** @dev Input type */
export type InputType = 'number' | 'text' | 'password';

/** @dev Input size */
export type InputSize = 'default' | 'small';

/** @dev Export props interface */
export interface InputProps {
  title?: string;
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  type?: InputType;
  value?: string;
  error?: string;
  size?: InputSize | 'default';
  style?: CSSProperties;
  onValueChange?: (value: string) => void;
  onChange?: (ref: Element | ChangeEvent<HTMLInputElement>) => void;
  /**
   * @dev Left icon to display in left side of the label.
   */
  icon?: string | ReactNode;
}

/**
 * @dev Export styled component props interface
 * */
export type StyledInputProps = InputProps & {
  secondaryVal: string;
};
