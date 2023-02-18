import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { IconRow } from './IconRow';

export default {
  title: 'Molecules/IconRow',
  component: IconRow,
  args: {
    color: 'white',
  },
} as Meta<typeof IconRow>;

const Template: StoryFn<typeof IconRow> = (args) => <IconRow {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'IconRow';
