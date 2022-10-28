import { FC, CSSProperties } from 'react';
import { StyledSpinner, SpinnerProps } from './spinner.styled';

export const LoadingSpinner: FC<
  SpinnerProps & { style?: CSSProperties }
> = props => {
  return <StyledSpinner {...props} style={props.style} />;
};
