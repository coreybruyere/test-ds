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
  utils: {
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
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
