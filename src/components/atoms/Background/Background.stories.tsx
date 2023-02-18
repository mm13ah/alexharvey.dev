import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Background } from './Background';

export default {
  title: 'Atoms/Background',
  component: Background,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Background>;

const Template: StoryFn<typeof Background> = () => <Background />;

export const Primary = Template.bind({});
Primary.storyName = 'Background';
