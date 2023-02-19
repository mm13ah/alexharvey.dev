import React from 'react';
import { SiGraphql, SiNodedotjs, SiReact, SiTypescript } from 'react-icons/si';
import { Background, ProfilePic } from '../../atoms';

export const Landing = () => (
  <Background className="flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
    <h1 className="text-5xl text-white font-medium my-2 tracking-wider animate-fadein">
      Hi, I&apos;m Alex.
    </h1>
    <ProfilePic />
    <h2 className="text-xl font-light text-white my-2 tracking-[3px] mb-5 animate-fadein-slow">
      A software developer.
    </h2>
    <div className="flex items-center gap-x-10 animate-fadein-slow">
      <SiTypescript size={38} color="white" />
      <SiReact size={38} color="white" />
      <SiGraphql size={38} color="white" />
      <SiNodedotjs size={38} color="white" />
    </div>
  </Background>
);
