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
import { useWindowSize } from '../../../hooks';
import { Background } from '../../atoms';
import { Section } from '../Section';
import { useExperienceConfig } from './useExperienceConfig';

export const Experience = () => {
  const { frontend, backend, other, writing, education } =
    useExperienceConfig();
  const { width } = useWindowSize();
  const ICON_SIZE = width < 640 ? 15 : 20;
  return (
    <Background
      id="experience"
      className={`bg-gradient-to-r from-blue-500 to-sky-500 flex-row
      dark:from-gray-900 dark:via-stone-700 dark:to-gray-900
      dark:border-b-2 dark:border-solid dark:border-gray-500`}
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
          <SiReact size={ICON_SIZE} color="white" />
          <SiNextdotjs size={ICON_SIZE} color="white" />
          <SiGatsby size={ICON_SIZE} color="white" />
          <SiStorybook size={ICON_SIZE} color="white" />
          <SiJest size={ICON_SIZE} color="white" />
          <SiCypress size={ICON_SIZE} color="white" />
          <SiTailwindcss size={ICON_SIZE} color="white" />
          <SiStyledcomponents size={ICON_SIZE} color="white" />
          <SiExpo size={ICON_SIZE} color="white" />
          <TbBrandReactNative size={ICON_SIZE} color="white" />
        </Section>
        <Section title="Backend" text={backend} className="mt-4 show-on-scroll">
          <SiNodedotjs size={ICON_SIZE} color="white" />
          <SiGraphql size={ICON_SIZE} color="white" />
          <SiExpress size={ICON_SIZE} color="white" />
          <SiPostgresql size={ICON_SIZE} color="white" />
          <SiApollographql size={ICON_SIZE} color="white" />
          <SiJest size={ICON_SIZE} color="white" />
          <SiPrisma size={ICON_SIZE} color="white" />
          <SiSequelize size={ICON_SIZE} color="white" />
        </Section>
        <Section title="Other" text={other} className="mt-4 show-on-scroll">
          <SiCypress size={ICON_SIZE} color="white" />
          <SiCircleci size={ICON_SIZE} color="white" />
          <SiGithubactions size={ICON_SIZE} color="white" />
          <SiDocker size={ICON_SIZE} color="white" />
        </Section>
        <Section title="Writing" text={writing} className="mt-4 show-on-scroll">
          <BsPencilSquare size={ICON_SIZE} color="white" />
        </Section>
        <Section
          title="Education"
          text={education}
          className="mt-4 show-on-scroll"
        >
          <FaGraduationCap size={ICON_SIZE} color="white" />
        </Section>
      </div>
    </Background>
  );
};
