// import { ThemedStyledFunction } from 'styled-components';

/** @dev This helper to convert tuple variable into single item and push in one array */
export const tuple = <T extends string[]>(...args: T) => args;

/** @dev Export utility provider */
export { UtilsProvider } from './utils.provider';

export * from './propValidator';
export * from './constant';
export * from './cssTransition';
export * from './collapseToast';
export * from './mapper';
