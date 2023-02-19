import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import {
  SiReact,
  SiStorybook,
  SiJest,
  SiCypress,
  SiTailwindcss,
  SiStyledcomponents,
  SiExpo,
  SiApollographql,
  SiCircleci,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiGraphql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSequelize,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { BsPencilSquare } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { Section } from './Section';
import { useExperienceConfig } from '../Experience/useExperienceConfig';

export default {
  title: 'Organisms/Section',
  component: Section,
} as Meta<typeof Section>;

export const Frontend: StoryFn<typeof Section> = () => {
  const { frontend } = useExperienceConfig();
  return (
    <Section title="Frontend" text={frontend}>
      <SiReact size={20} color="white" />
      <SiStorybook size={20} color="white" />
      <SiJest size={20} color="white" />
      <SiCypress size={20} color="white" />
      <SiTailwindcss size={20} color="white" />
      <SiStyledcomponents size={20} color="white" />
      <SiExpo size={20} color="white" />
      <TbBrandReactNative size={20} color="white" />
    </Section>
  );
};
Frontend.storyName = 'Frontend';

export const Backend: StoryFn<typeof Section> = () => {
  const { backend } = useExperienceConfig();
  return (
    <Section title="Backend" text={backend}>
      <SiNodedotjs size={20} color="white" />
      <SiGraphql size={20} color="white" />
      <SiExpress size={20} color="white" />
      <SiPostgresql size={20} color="white" />
      <SiApollographql size={20} color="white" />
      <SiJest size={20} color="white" />
      <SiPrisma size={20} color="white" />
      <SiSequelize size={20} color="white" />
    </Section>
  );
};
Backend.storyName = 'Backend';

export const Other: StoryFn<typeof Section> = () => {
  const { other } = useExperienceConfig();
  return (
    <Section title="Other" text={other}>
      <SiCypress size={20} color="white" />
      <SiCircleci size={20} color="white" />
      <SiGithubactions size={20} color="white" />
      <SiDocker size={20} color="white" />
    </Section>
  );
};
Other.storyName = 'Other';

export const Writing: StoryFn<typeof Section> = () => {
  const { writing } = useExperienceConfig();
  return (
    <Section title="Writing" text={writing}>
      <BsPencilSquare size={20} color="white" />
    </Section>
  );
};
Writing.storyName = 'Writing';

export const Education: StoryFn<typeof Section> = () => {
  const { education } = useExperienceConfig();
  return (
    <Section title="Education" text={education}>
      <FaGraduationCap size={20} color="white" />
    </Section>
  );
};
Education.storyName = 'Education';
