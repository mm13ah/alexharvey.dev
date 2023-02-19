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
import { IconRow } from './IconRow';

export default {
  title: 'Molecules/IconRow',
  component: IconRow,
  args: {
    color: 'white',
  },
} as Meta<typeof IconRow>;

export const Frontend: StoryFn<typeof IconRow> = (args) => (
  <IconRow {...args} title="Frontend">
    <SiReact size={20} color="white" />
    <SiStorybook size={20} color="white" />
    <SiJest size={20} color="white" />
    <SiCypress size={20} color="white" />
    <SiTailwindcss size={20} color="white" />
    <SiStyledcomponents size={20} color="white" />
    <SiExpo size={20} color="white" />
    <TbBrandReactNative size={20} color="white" />
  </IconRow>
);
Frontend.storyName = 'Frontend';

export const Backend: StoryFn<typeof IconRow> = (args) => (
  <IconRow {...args} title="Backend">
    <SiNodedotjs size={20} color="white" />
    <SiGraphql size={20} color="white" />
    <SiExpress size={20} color="white" />
    <SiPostgresql size={20} color="white" />
    <SiApollographql size={20} color="white" />
    <SiJest size={20} color="white" />
    <SiPrisma size={20} color="white" />
    <SiSequelize size={20} color="white" />
  </IconRow>
);
Backend.storyName = 'Backend';

export const Other: StoryFn<typeof IconRow> = (args) => (
  <IconRow {...args} title="Other">
    <SiCypress size={20} color="white" />
    <SiCircleci size={20} color="white" />
    <SiGithubactions size={20} color="white" />
    <SiDocker size={20} color="white" />
  </IconRow>
);
Other.storyName = 'Other';

export const Writing: StoryFn<typeof IconRow> = (args) => (
  <IconRow {...args} title="Writing">
    <BsPencilSquare size={20} color="white" />
  </IconRow>
);
Writing.storyName = 'Writing';

export const Education: StoryFn<typeof IconRow> = (args) => (
  <IconRow {...args} title="Education">
    <FaGraduationCap size={20} color="white" />
  </IconRow>
);
Education.storyName = 'Education';
