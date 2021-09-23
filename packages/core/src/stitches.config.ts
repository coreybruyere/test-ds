// @ts-nocheck
import { createStitches, globalCss } from '@stitches/react';
// @ts-ignore
import { normalize } from 'normalize-stitches';

export * from '@stitches/react';

import { theme as defaultTheme } from './theme';

export const {
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: defaultTheme,
});

// @ts-ignore
export const globalStyles = globalCss({
  ...normalize,
  html: {
    fontSize: '100%',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '@font-face': [
    {
      fontFamily: 'Lato',
      fontWeight: '400',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src:
        'url(./fonts/Lato-Regular.woff2) format("woff2"), url(./fonts/Lato-Regular.woff) format("woff")',
    },
    {
      fontFamily: 'Lato',
      fontWeight: '300',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src:
        'url(./fonts/Lato-Light.woff2) format("woff2"), url(./fonts/Lato-Light.woff) format("woff")',
    },
    {
      fontFamily: 'Lato',
      fontWeight: '400',
      fontStyle: 'italic',
      fontDisplay: 'swap',
      src:
        'url(./fonts/Lato-Italic.woff2) format("woff2"), url(./fonts/Lato-Italic.woff) format("woff")',
    },
    {
      fontFamily: 'Lato',
      fontWeight: '600',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src:
        'url(./fonts/Lato-Bold.woff2) format("woff2"), url(./fonts/Lato-Bold.woff) format("woff")',
    },
    {
      fontFamily: 'Lato',
      fontWeight: '600',
      fontStyle: 'italic',
      fontDisplay: 'swap',
      src:
        'url(./fonts/Lato-BoldItalic.woff2) format("woff2"), url(./fonts/Lato-BoldItalic.woff) format("woff")',
    },
  ],
  ':root': {
    fontFamily: '$sans',
  },
});
