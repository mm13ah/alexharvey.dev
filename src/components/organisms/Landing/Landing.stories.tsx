import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Landing } from './Landing';

export default {
  title: 'Organisms/Landing',
  component: Landing,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Landing>;

const Template: StoryFn<typeof Landing> = () => <Landing />;

export const Primary = Template.bind({});
Primary.storyName = 'Landing';
