import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
  args: {},
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = () => <Navbar />;

export const Primary = Template.bind({});
Primary.storyName = 'Navbar';
