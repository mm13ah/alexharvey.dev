import Image from 'next/image';
import React from 'react';
import { Background } from '../../atoms';

import AboutPic from '../../../../public/about.png';

export const About = () => (
  <Background className="bg-white flex-row">
    <div className="flex-1 flex flex-row items-center justify-center">
      <Image
        alt="me"
        src={AboutPic}
        width={0}
        height={0}
        className="h-screen w-auto"
      />
    </div>
    <div className="flex-1 m-10">
      <h2 className="text-neutral-900 font-medium tracking-wider text-4xl mb-2">
        About
      </h2>
      <p className="text-neutral-900 tracking-wide">
        Hi, I&apos;m Alex, an agile software developer currently working at{' '}
        <a
          href="https://www.contic.co.uk/"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-500"
        >
          Contic
        </a>
        . I love working with JavaScript and all the brilliant open source
        technologies that come with it. In my day-to-day life, I work primarily
        with TypeScript, React, GraphQL, NodeJS and PostgreSQL. I also have a
        solid foundation in writing semantic HTML and applying responsive CSS.
      </p>
      <br />
      <p className="text-neutral-900 tracking-wide">
        Outside of work, I enjoy playing gigs with my band,{' '}
        <a
          href="https://open.spotify.com/artist/1HDp77de4Mrv8OnnEduNJu"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-500"
        >
          Pretty Terry
        </a>
        , DJing, producing music and speaking bad French avec l&apos;aide de ma
        petite amie.
      </p>
      <br />
      <p className="text-neutral-900 tracking-wide">
        If you&apos;d like to know more about my techical experience, you can{' '}
        <a href="#experience" className="underline text-blue-500">
          check it out below
        </a>
        .
      </p>
    </div>
  </Background>
);
