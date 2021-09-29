import { globalStyles } from '../src/stitches.config';
export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      state: 'open',
    },
  },
};

export const decorators = [
  (Story) => {
    globalStyles();

    return <Story />;
  },
];
