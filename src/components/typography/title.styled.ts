import styled from 'styled-components';
import {
  TitleProps,
  BodyProps,
  CaptionProps,
  SmallTextProps,
  TitleFontSizes,
  TitleLineHeights,
  TitleTypes,
} from './types';

/**
 * @dev Export styled-component for title component attach with props
 */
export const StyledTitle = styled.h3<TitleProps>`
  font-size: ${props =>
    TitleFontSizes[TitleTypes.indexOf(props.type || TitleTypes[0])]};
  line-height: ${props =>
    TitleLineHeights[TitleTypes.indexOf(props.type || TitleTypes[0])]};
  font-family: hk-font-medium;
`;

/**
 * @dev Export styled-component for body component attach with props
 */
export const StyledBody = styled.p<BodyProps>`
  font-size: 16px;
  line-height: 24px;
  font-family: ${props =>
    props.type === 'regular' ? 'hk-font-regular' : 'hk-font-medium'};
`;

/**
 * @dev Export styled-component for Caption component attach with props
 */
export const StyledCaption = styled.p<CaptionProps>`
  font-size: 14px;
  line-height: 22px;
  font-family: ${props =>
    props.type === 'regular' ? 'hk-font-regular' : 'hk-font-medium'};
`;

/**
 * @dev Export styled-component for SmallText component attach with props
 */
export const StyledSmallText = styled.p<SmallTextProps>`
  font-size: 12px;
  line-height: 18px;
  font-family: ${props =>
    props.type === 'regular' ? 'hk-font-regular' : 'hk-font-medium'};
`;
