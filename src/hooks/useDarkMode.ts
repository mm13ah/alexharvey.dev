import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(
      storedTheme === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    );
  }, [setTheme]);
  const toggleDarkMode = () => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return { theme, toggleDarkMode };
};
