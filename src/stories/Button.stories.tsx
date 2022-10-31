import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, Button } from '../browser';
import type { ButtonProps } from '../browser';

export function ButtonComponent(props: ButtonProps) {
  return (
    <ThemeProvider>
      <Button {...props} />
    </ThemeProvider>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cavies-UIKit/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = args => (
  <ButtonComponent {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  shape: 'primary',
  text: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  shape: 'secondary',
  text: 'Secondary Button',
};
