import { useContext } from 'react';
import { ThemeContext } from './theme-provider';

/**
 * @dev Use the kit theme context.
 * @returns context
 */
export const useTheme = () => {
  /** @dev Define context */
  const context = useContext(ThemeContext);

  /** @dev Raise error if don't find any theme provider in audience evn. */
  if (context === undefined) {
    throw new Error(`Theme wrapper hasn't already imported`);
  }
  return context;
};
