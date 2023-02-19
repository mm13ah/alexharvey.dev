import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import { Background } from '../../atoms';

export const Contact = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Background
      id="contact"
      className={`bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-stone-700
      dark:to-gray-900 p-10 items-center justify-evenly flex-col`}
    >
      <h2
        className={`text-neutral-900 text-center font-medium tracking-wider text-5xl mb-2
        w-full show-on-scroll dark:text-white`}
      >
        Get In Touch
      </h2>
      <BsEnvelope
        size={80}
        color={
          !mounted ? 'transparent' : theme === 'dark' ? 'white' : '#171717'
        }
        className="show-on-scroll"
      />
      <div className="flex flex-col h-full w-full items-center justify-center show-on-scroll">
        <h3 className="text-3xl">Alex Harvey</h3>
        <h4 className="font-light mt-2">aharvey7nr7@gmail.com</h4>
        <h4 className="font-light mt-1">alexharvey.dev</h4>
        <div className="flex gap-x-10 mt-3">
          <a href="https://github.com/mm13ah" target="_blank" rel="noreferrer">
            <SiGithub
              size={30}
              color={
                !mounted
                  ? 'transparent'
                  : theme === 'dark'
                  ? 'white'
                  : '#171717'
              }
            />
          </a>
        </div>
      </div>
    </Background>
  );
};
