import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { About } from './About';

export default {
  title: 'Organisms/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof About>;

const Template: StoryFn<typeof About> = () => <About />;

export const Primary = Template.bind({});
Primary.storyName = 'About';
