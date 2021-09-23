import React, { ReactNode } from 'react';

import { styled, VariantProps } from '../../stitches.config';

export type ButtonProps = { children?: ReactNode } & VariantProps<
  typeof StyledButton
>;

const StyledButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Default button
  height: 45,
  px: '$3',
  fontSize: '$3',
  fontWeight: 500,
  cursor: 'pointer',
  border: '$borderWidths$2 solid $red',
  borderRadius: '$1',

  // Disabled
  '&:disabled': {
    backgroundColor: '$gray',
    boxShadow: 'inset 0 0 0 1px $gray',
    color: '$gray',
    pointerEvents: 'none',
  },

  // Button variants
  variants: {
    variant: {
      primary: {
        backgroundColor: '$red',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$white',
        color: '$red',
      },
    },
  },

  // Default variant!
  defaultVariants: {
    variant: 'primary',
  },
});

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};
