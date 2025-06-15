
import { createContext, useContext } from 'react';

const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {}
})
export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
