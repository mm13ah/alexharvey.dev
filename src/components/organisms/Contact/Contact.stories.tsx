import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Contact } from './Contact';

export default {
  title: 'Organisms/Contact',
  component: Contact,
  args: {},
} as Meta<typeof Contact>;

const Template: StoryFn<typeof Contact> = () => <Contact />;

export const Primary = Template.bind({});
Primary.storyName = 'Contact';
