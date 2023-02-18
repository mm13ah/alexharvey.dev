import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ProfilePic } from './ProfilePic';

export default {
  title: 'Atoms/ProfilePic',
  component: ProfilePic,
  args: {},
} as Meta<typeof ProfilePic>;

const Template: StoryFn<typeof ProfilePic> = () => <ProfilePic />;

export const Primary = Template.bind({});
Primary.storyName = 'ProfilePic';
