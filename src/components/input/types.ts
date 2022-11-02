import { ChangeEvent, CSSProperties } from 'react';

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
}

/**
 * @dev Export styled component props interface
 * */
export type StyledInputProps = InputProps & {
  secondaryVal: string;
};
