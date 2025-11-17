import React, { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('tmd_theme', 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
