import * as NextImage from 'next/image';
import { SiGraphql, SiReact, SiTypescript } from 'react-icons/si';
import '../styles/globals.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
    },
  },
};
