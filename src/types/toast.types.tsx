import React from 'react';
import { CloseButtonProps, IconProps } from '../components/toast';

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';

export type Theme = 'light' | 'dark' | 'colored';

/**
 * @dev The position of toast container
 * @param {top-right} Position in the corner right in top of browser screen.
 * @param {top-center} Position in the central in top of browser screen.
 * @param {top-left} Position in the corner left in top of browser screen.
 * @param {bottom-right} Position in the corner right in bottom of browser screen.
 * @param {bottom-center} Position in the center in bottom of browser screen.
 * @param {bottom-left} Position in the corner left in bottom of browser screen.
 */
export type ToastPosition =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';

export interface ToastContentProps<Data = {}> {
  closeToast?: () => void;
  toastProps: ToastProps;
  data?: Data;
}

export type ToastContent<T = unknown> =
  | React.ReactNode
  | ((props: ToastContentProps<T>) => React.ReactNode);

export type Id = number | string;

export type ToastTransition =
  | React.FC<ToastTransitionProps>
  | React.ComponentClass<ToastTransitionProps>;

/**
 * ClassName for the elements - can take a function to build a classname or a raw string that is cx'ed to defaults
 */
export type ToastClassName =
  | ((context?: {
      type?: TypeOptions;
      defaultClassName?: string;
      position?: ToastPosition;
      rtl?: boolean;
    }) => string)
  | string;

export interface ClearWaitingQueueParams {
  containerId?: Id;
}

export type DraggableDirection = 'x' | 'y';

interface CommonOptions {
  /**
   * @dev Pause the timer when the mouse hover the toast.
   * @param {default}: true
   */
  pauseOnHover?: boolean;

  /**
   * @dev Pause the toast when the window loses focus.
   * @param {default}: true
   */
  pauseOnFocusLoss?: boolean;

  /**
   * @dev Remove the toast when clicked.
   * @param {Default}: true
   */
  closeOnClick?: boolean;

  /**
   * @dev Set the delay in ms to close the toast automatically.
   * @additional Use `false` to prevent the toast from closing.
   * @param {Default}: 5000
   */
  autoClose?: number | false;

  /**
   * @dev Set the default position to use.
   * @dev @set `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
   * @param {Default}: 'top-right'
   */
  position?: ToastPosition;

  /**
   * @dev Pass a custom close button.
   * @dev To remove the close button pass `false`
   */
  closeButton?:
    | boolean
    | ((props: CloseButtonProps) => React.ReactNode)
    | React.ReactElement<CloseButtonProps>;

  /**
   * @dev An optional css class to set for the progress bar.
   */
  progressClassName?: ToastClassName;

  /**
   * @dev An optional style to set for the progress bar.
   */
  progressStyle?: React.CSSProperties;

  /**
   * @dev An optional css class to set for the toast content.
   */
  bodyClassName?: ToastClassName;

  /**
   * @dev An optional inline style to apply for the toast content.
   */
  bodyStyle?: React.CSSProperties;

  /**
   * @dev Hide or show the progress bar.
   * @param {Default}: false
   */
  hideProgressBar?: boolean;

  /**
   * @dev Pass a custom transition built with react-transition-group.
   */
  transition?: ToastTransition;

  /**
   * @dev Allow toast to be draggable
   * @param {Default}: true
   */
  draggable?: boolean;

  /**
   * @dev The percentage of the toast's width it takes for a drag to dismiss a toast
   * @param {Default}: 80
   */
  draggablePercent?: number;

  /**
   * @dev Specify in which direction should you swipe to dismiss the toast
   * @param {Default}: "x"
   */

  draggableDirection?: DraggableDirection;

  /**
   * @dev Define the ARIA role for the toast
   * @dev `Default: alert`
   */
  role?: string;

  /**
   * @dev Set id to handle multiple container
   */
  containerId?: Id;

  /**
   * @dev Fired when clicking inside toaster
   */
  onClick?: (event: React.MouseEvent) => void;

  /**
   * @dev Support right to left display.
   * @dev `Default: false`
   */
  rtl?: boolean;

  /**
   * @dev
   * Used to display a custom icon. Set it to `false` to prevent
   * the icons from being displayed
   */
  icon?:
    | boolean
    | ((props: IconProps) => React.ReactNode)
    | React.ReactElement<IconProps>
    | string
    | number
    | React.ReactNode;

  /**
   * @dev Theme to use.
   * `One of: 'light', 'dark', 'colored'`
   * `Default: 'light'`
   */
  theme?: Theme;
}

export interface ToastOptions<Data = {}> extends CommonOptions {
  /**
   * @dev An optional css class to set.
   */
  className?: ToastClassName;

  /**
   * @dev Called when toast is mounted.
   */
  onOpen?: <T = {}>(props: T) => void;

  /**
   * @dev Called when toast is unmounted.
   */
  onClose?: <T = {}>(props: T) => void;

  /**
   * @dev An optional inline style to apply.
   */
  style?: React.CSSProperties;

  /**
   * @dev Set the toast type.
   * @dev One of: 'info', 'success', 'warning', 'error', 'default'`
   */
  type?: TypeOptions;

  /**
   * @dev Set a custom `toastId`
   */
  toastId?: Id;

  /**
   * @dev Used during update
   */
  updateId?: Id;

  /**
   * @dev Set the percentage for the controlled progress bar. `Value must be between 0 and 1.`
   */
  progress?: number | string;

  /**
   * @dev Add a delay in ms before the toast appear.
   */
  delay?: number;

  isLoading?: boolean;

  data?: Data;
}

export interface UpdateOptions<T = unknown> extends Nullable<ToastOptions<T>> {
  /**
   * @dev Used to update a toast.
   * @dev Pass any valid ReactNode(string, number, component)
   */
  render?: ToastContent<T>;
}

export interface ToastContainerProps extends CommonOptions {
  /**
   * @dev An optional css class to set.
   */
  className?: ToastClassName;

  /**
   * @dev Whether or not to display the newest toast on top.
   * @dev `Default: false`
   */
  newestOnTop?: boolean;

  /**
   * @dev An optional inline style to apply.
   */
  style?: React.CSSProperties;

  /**
   * @dev An optional inline style to apply for the toast.
   */
  toastStyle?: React.CSSProperties;

  /**
   * @dev An optional css class for the toast.
   */
  toastClassName?: ToastClassName;

  /**
   * @dev Show the toast only if it includes containerId and it's the same as containerId
   * @param {Default}: false
   */
  enableMultiContainer?: boolean;

  /**
   * @dev Limit the number of toast displayed at the same time
   */
  limit?: number;
}

export interface ToastTransitionProps {
  isIn: boolean;
  done: () => void;
  position: ToastPosition | string;
  preventExitTransition: boolean;
  nodeRef: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
}

/**
 * @INTERNAL
 */
export interface ToastProps extends ToastOptions {
  isIn: boolean;
  staleId?: Id;
  toastId: Id;
  key: Id;
  transition: ToastTransition;
  closeToast: () => void;
  position: ToastPosition;
  children?: ToastContent;
  draggablePercent: number;
  draggableDirection?: DraggableDirection;
  progressClassName?: ToastClassName;
  className?: ToastClassName;
  bodyClassName?: ToastClassName;
  deleteToast: () => void;
  theme: Theme;
  type: TypeOptions;
  iconOut?: React.ReactNode;
}

/**
 * @INTERNAL
 */
export interface NotValidatedToastProps extends Partial<ToastProps> {
  toastId: Id;
}

/**
 * @INTERNAL
 */
export interface Toast {
  content: ToastContent;
  props: ToastProps;
}

export type ToastItemStatus = 'added' | 'removed' | 'updated';

export interface ToastItem<Data = {}> {
  content: React.ReactNode;
  id: Id;
  theme?: Theme;
  type?: TypeOptions;
  isLoading?: boolean;
  containerId?: Id;
  data: Data;
  icon?: React.ReactNode | false;
  status: ToastItemStatus;
}
