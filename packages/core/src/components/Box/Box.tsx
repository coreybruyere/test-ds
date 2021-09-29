import React, { FC, ReactNode, ComponentProps } from 'react';

import { styled } from '../../stitches.config';

export type BoxProps = {
  children?: ReactNode;
} & ComponentProps<typeof StyledDiv>;

const StyledDiv = styled('div', {});

export const Box: FC<BoxProps> = (props) => {
  return <StyledDiv {...props} />;
};
