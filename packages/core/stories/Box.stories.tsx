import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps } from '../src';

const meta: Meta = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BoxProps> = (args) => (
  <Box
    css={{
      backgroundColor: '$red',
      color: '$white',
      fontSize: '$5',
      padding: '$4',
    }}
    {...args}
  />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
// View arg story writing docs here: https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories
export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      Example of <code>css</code> prop to access theme tokens.
      <small>See src</small>
    </>
  ),
};
