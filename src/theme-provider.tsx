import { createContext, FC, ReactNode } from 'react';
import { GlobalStyle } from './styles/global-styles';
import { ToastContainer } from './components/toast';
import {} from './styles/css/main.css';

/**
 * @dev Theme context states
 * @param {}
 */
export interface ThemeContextState {}

/**
 * @dev Theme provider props
 * @param {}
 */
export interface ThemeProviderProps {}

/**
 * @dev Define theme context
 */
export const ThemeContext = createContext<ThemeContextState>({});

/** @dev Export theme provider */
export const ThemeProvider: FC<
  ThemeProviderProps & { children: ReactNode }
> = props => {
  return (
    <ThemeContext.Provider value={{}}>
      <ToastContainer />
      <GlobalStyle />
      {props.children}
    </ThemeContext.Provider>
  );
};
