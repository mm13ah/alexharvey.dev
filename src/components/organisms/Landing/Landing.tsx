import React from 'react';
import { Background, ProfilePic } from '../../atoms';
import { IconRow } from '../../molecules';

export const Landing = () => (
  <Background className="flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
    <h1 className="text-5xl text-white font-medium my-2 tracking-wider">
      Hi, I&apos;m Alex.
    </h1>
    <ProfilePic />
    <h2 className="text-xl font-light text-white my-2 tracking-[3px] mb-5">
      A software developer.
    </h2>
    <IconRow />
  </Background>
);
