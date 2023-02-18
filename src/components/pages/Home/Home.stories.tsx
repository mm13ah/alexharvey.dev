import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Home } from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Home>;

const Template: StoryFn<typeof Home> = () => <Home />;

export const Primary = Template.bind({});
Primary.storyName = 'Home';
