import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      {children}
    </EmotionThemeProvider>
  );
}

export default ThemeProvider;
