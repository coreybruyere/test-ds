import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
// View arg story writing docs here: https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories
//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { variant: 'primary', children: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, variant: 'secondary' };
