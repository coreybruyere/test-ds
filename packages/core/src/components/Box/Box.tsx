import React, { ReactNode } from 'react';

import { styled, VariantProps } from '../../stitches.config';

export type BoxProps = {
  children?: ReactNode;
} & VariantProps<typeof StyledDiv>;

const StyledDiv = styled('div', {});

export const Box = (props: BoxProps) => {
  return <StyledDiv {...props} />;
};
