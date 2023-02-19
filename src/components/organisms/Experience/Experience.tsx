import React from 'react';
import {
  SiApollographql,
  SiCypress,
  SiExpress,
  SiGraphql,
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiSequelize,
  SiPrisma,
  SiDocker,
  SiCircleci,
  SiGithubactions,
  SiExpo,
  SiNextdotjs,
  SiGatsby,
} from 'react-icons/si';
import { BsPencilSquare } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { Background } from '../../atoms';
import { Section } from '../Section';
import { useExperienceConfig } from './useExperienceConfig';

export const Experience = () => {
  const { frontend, backend, other, writing, education } =
    useExperienceConfig();
  return (
    <Background
      id="experience"
      className={`bg-gradient-to-r from-blue-500 to-sky-500 flex-row
      dark:from-stone-900 dark:via-gray-700 dark:to-stone-90
      dark:border-b-2 dark:border-solid dark:border-gray-700`}
    >
      <div className="m-10 lg:p-10">
        <h2 className="text-white font-medium tracking-wider text-4xl mb-2 show-on-scroll">
          Experience
        </h2>
        <Section
          title="Frontend"
          text={frontend}
          className="mt-4 show-on-scroll"
        >
          <SiReact size={20} color="white" />
          <SiNextdotjs size={20} color="white" />
          <SiGatsby size={20} color="white" />
          <SiStorybook size={20} color="white" />
          <SiJest size={20} color="white" />
          <SiCypress size={20} color="white" />
          <SiTailwindcss size={20} color="white" />
          <SiStyledcomponents size={20} color="white" />
          <SiExpo size={20} color="white" />
          <TbBrandReactNative size={20} color="white" />
        </Section>
        <Section title="Backend" text={backend} className="mt-4 show-on-scroll">
          <SiNodedotjs size={20} color="white" />
          <SiGraphql size={20} color="white" />
          <SiExpress size={20} color="white" />
          <SiPostgresql size={20} color="white" />
          <SiApollographql size={20} color="white" />
          <SiJest size={20} color="white" />
          <SiPrisma size={20} color="white" />
          <SiSequelize size={20} color="white" />
        </Section>
        <Section title="Other" text={other} className="mt-4 show-on-scroll">
          <SiCypress size={20} color="white" />
          <SiCircleci size={20} color="white" />
          <SiGithubactions size={20} color="white" />
          <SiDocker size={20} color="white" />
        </Section>
        <Section title="Writing" text={writing} className="mt-4 show-on-scroll">
          <BsPencilSquare size={20} color="white" />
        </Section>
        <Section
          title="Education"
          text={education}
          className="mt-4 show-on-scroll"
        >
          <FaGraduationCap size={20} color="white" />
        </Section>
      </div>
    </Background>
  );
};
