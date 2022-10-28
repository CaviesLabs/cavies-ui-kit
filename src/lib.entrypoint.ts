/** @dev Export components */
export { Button, Input, Title, Body, Caption, SmallText } from './components';

/** @dev Export components props interface */
export type {
  ButtonProps,
  InputProps,
  TitleProps,
  BodyProps,
  CaptionProps,
  SmallTextProps,
} from './components';

/**
 * @dev Export all functions releated to theme provider
 * @description
 * Theme provider is a wrapper component which use for definition
 * all functions for configurations in components included in the kit
 * @exports @var {useTheme} Use this context to get all configurations
 * @exports @var {ThemeProider} Must wrap all the app in this wrapper to use all functions in the kit
 * @exports @type
 */
export { useTheme } from './useTheme';
export { ThemeProvider } from './theme-provider';
export type { ThemeContextState, ThemeProviderProps } from './theme-provider';
