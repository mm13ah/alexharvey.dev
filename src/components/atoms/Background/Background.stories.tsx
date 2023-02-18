import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Background } from './Background';

export default {
  title: 'Atoms/Background',
  component: Background,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    className: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  },
} as Meta<typeof Background>;

const Template: StoryFn<typeof Background> = (args) => <Background {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Background';
