import { FC } from 'react';
import {
  StyledTitle,
  StyledBody,
  StyledCaption,
  StyledSmallText,
} from './title.styled';
import { TitleProps, BodyProps, CaptionProps, SmallTextProps } from './types';

export const Title: FC<TitleProps> = props => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};

export const Body: FC<BodyProps> = props => {
  return <StyledBody {...props}>{props.children}</StyledBody>;
};

export const Caption: FC<CaptionProps> = props => {
  return <StyledCaption {...props}>{props.children}</StyledCaption>;
};

export const SmallText: FC<SmallTextProps> = props => {
  return <StyledSmallText {...props}>{props.children}</StyledSmallText>;
};
