import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Experience } from './Experience';

export default {
  title: 'Organisms/Experience',
  component: Experience,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Experience>;

const Template: StoryFn<typeof Experience> = () => <Experience />;

export const Primary = Template.bind({});
Primary.storyName = 'Experience';
