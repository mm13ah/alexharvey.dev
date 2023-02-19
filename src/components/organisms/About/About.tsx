import Image from 'next/image';
import React from 'react';
import { Background } from '../../atoms';

import AboutPic from '../../../../public/about.png';

export const About = () => {
  return (
    <Background
      id="about"
      className={`bg-white grid grid-cols-1 lg:grid-cols-2 p-10 dark:bg-gradient-to-r dark:from-gray-900
      dark:via-stone-700 dark:to-gray-900 dark:border-b-2 dark:border-solid dark:border-gray-700`}
    >
      <div className="flex flex-row items-center justify-center w-full h-full show-on-scroll">
        <Image
          alt="me"
          src={AboutPic}
          width={0}
          height={0}
          className="w-auto h-full p-10"
        />
      </div>
      <div className="lg:p-10 show-on-scroll">
        <h2 className="text-neutral-900 font-medium tracking-wider text-4xl mb-2 dark:text-white">
          About
        </h2>
        <p className="text-neutral-900 text-xl tracking-wide leading-relaxed font-light dark:text-white">
          Hi, I&apos;m Alex, an agile software developer currently working at{' '}
          <a
            href="https://www.contic.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500 dark:text-cyan-500"
          >
            Contic
          </a>
          . I love working with JavaScript and all the brilliant open source
          technologies that come with it. In my day-to-day life, I work
          primarily with TypeScript, React, GraphQL, NodeJS and PostgreSQL. I
          also have a solid foundation in writing semantic HTML and applying
          responsive CSS.
        </p>
        <br />
        <p className="text-neutral-900 text-xl tracking-wide leading-relaxed font-light dark:text-white">
          Outside of work, I enjoy playing gigs with my band,{' '}
          <a
            href="https://open.spotify.com/artist/1HDp77de4Mrv8OnnEduNJu"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500 dark:text-cyan-500"
          >
            Pretty Terry
          </a>
          , DJing, producing music and speaking bad French avec l&apos;aide de
          ma petite amie.
        </p>
        <br />
        <p className="text-neutral-900 text-xl tracking-wide leading-relaxed font-light dark:text-white">
          If you&apos;d like to know more about my techical experience, you can{' '}
          <a
            href="#experience"
            className="underline text-blue-500 dark:text-cyan-500"
          >
            check it out below
          </a>
          .
        </p>
      </div>
    </Background>
  );
};
