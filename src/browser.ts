/** @dev Export components */
export {
  Button,
  Input,
  Title,
  Body,
  Caption,
  SmallText,
  Modal,
} from './components';

/** @dev Export components props interface */
export type {
  ButtonProps,
  InputProps,
  TitleProps,
  BodyProps,
  CaptionProps,
  SmallTextProps,
  ModalProps,
} from './components';

/** @dev Export global styles in styled-component format */
export { GlobalStyle as StyledComponentGlobal } from './styles/global-styles';

/** @dev Export UI-Kit colors pattern */
export { StyleColors as Colors } from './styles/style-constants';

/** @dev Export icon images */
export * as Icons from './styles/icon-constants';

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

/**
 * @dev Export al functioned related to cavies toastify
 * @description
 * - Export hooks for usage functions related to toastify container (toast, delete, delay, etc.)
 * - Export needed components for usage
 * - Export types
 */
export { useToastContainer, useToast } from './hooks';
export { cssTransition, collapseToast } from './utils';
export {
  ToastContainer,
  Bounce,
  Flip,
  Slide,
  Zoom,
  Icons as ToastIcons,
} from './components/toast';
export type { IconProps, CloseButtonProps } from './components/toast';
export { toast } from './core';
export type { ToastPromiseParams } from './core';
export type {
  TypeOptions,
  Theme,
  ToastPosition,
  ToastContentProps,
  ToastContent,
  ToastTransition,
  ToastClassName,
  ClearWaitingQueueParams,
  DraggableDirection,
  ToastOptions,
  UpdateOptions,
  ToastContainerProps,
  ToastTransitionProps,
  Id,
  ToastItem,
} from './types/toast.types';
