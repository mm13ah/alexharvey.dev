---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.stories.tsx
---
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { <%=name%> } from './<%=name%>';

export default {
  title: '<%=h.changeCase.sentence(atomic)%>s/<%=name%>',
  component: <%=name%>,
  args: {},
} as Meta<typeof <%=name%>>;

const Template: StoryFn<typeof <%=name%>> = (args) => <<%=name%> {...args} />;

export const Primary = Template.bind({});
Primary.storyName = '<%=name%>';
