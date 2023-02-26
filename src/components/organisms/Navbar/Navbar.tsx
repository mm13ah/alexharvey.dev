import React, { useEffect, useState } from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { useDarkMode, useWindowSize } from '../../../hooks';

export const Navbar = () => {
  const { theme, toggleDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  const { mobile } = useWindowSize();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed top-0 right-0 z-10
      w-screen py-5 px-10 bg-gradient-to-r from-blue-500/75 to-sky-500/75
      dark:from-gray-900/75 dark:via-stone-700/75 dark:to-gray-900/75`}
    >
      <a href="#home">
        <IoHomeSharp size={20} color="white" />
      </a>
      {!mobile && (
        <ul className="flex flex-row text-white tracking-widest gap-x-5 md:ml-auto md:mr-10">
          <li className="hover:underline text-white nav-item">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline text-white nav-item">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:underline text-white nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
      {mounted && (
        <button onClick={toggleDarkMode} aria-labelledby="toggle-label">
          {theme === 'dark' ? (
            <RiMoonFill size={20} color="white" />
          ) : (
            <RiSunFill size={20} color="orange" />
          )}
          <span id="toggle-label" className="hidden">
            Toggle theme
          </span>
        </button>
      )}
    </nav>
  );
};
