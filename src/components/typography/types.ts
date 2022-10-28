import { CSSProperties, ReactNode } from 'react';
import { tuple } from '../../utils';

/** @dev Type of title */
export const TitleTypes = tuple(
  'large',
  'medium',
  'title',
  'headline',
  'sub-headline',
);
export type TitleType = typeof TitleTypes[number];

/** @dev Font-sizes of title */
export const TitleFontSizes = tuple('40px', '36px', '32px', '24px', '20px');

/** @dev Line-heights of title */
export const TitleLineHeights = tuple('48px', '44px', '40px', '24px', '20px');

/** @dev Type of body */
const BodyTypes = tuple('normal', 'regular');
export type BodyType = typeof BodyTypes[number];

/** @dev Type of caption */
const CaptionTypes = tuple('normal', 'regular');
export type CaptionType = typeof CaptionTypes[number];

/** @dev Type of small text */
const SmallTextTypes = tuple('normal', 'regular');
export type SmallTextType = typeof SmallTextTypes[number];

export interface DefaultProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/** @dev Export component props interface */
export type TitleProps = DefaultProps & { type?: TitleType };
export type BodyProps = DefaultProps & { type?: BodyType };
export type CaptionProps = DefaultProps & { type?: CaptionType };
export type SmallTextProps = DefaultProps & { type?: SmallTextType };
