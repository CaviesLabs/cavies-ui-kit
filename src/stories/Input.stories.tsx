import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, Input } from '../browser';
import type { InputProps } from '../browser';

function InputComponent(props: InputProps) {
  return (
    <ThemeProvider>
      <Input {...props} />
    </ThemeProvider>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/InputField',
  component: InputComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponent> = args => (
  <InputComponent {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const TextField = Template.bind({});
TextField.args = {
  onValueChange: val => console.log(val),
  title: 'Email address',
  type: 'text',
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  onValueChange: val => console.log(val),
  title: 'Password',
  type: 'password',
};
