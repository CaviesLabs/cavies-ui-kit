// import { ThemedStyledFunction } from 'styled-components';

/** @dev This helper to convert tuple variable into single item and push in one array */
export const tuple = <T extends string[]>(...args: T) => args;

/** @dev Export utility provider */
export { UtilsProvider } from './utils.provider';

// export const withProps = <U>() => <P, T, O>(fn: ThemedStyledFunction<P, T, O>) =>
// fn as ThemedStyledFunction<P & U, T, O & U>
