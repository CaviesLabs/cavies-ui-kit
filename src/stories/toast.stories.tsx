import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, Button, toast } from '../browser';
import type { ButtonProps } from '../browser';

function ButtonComponent(props: ButtonProps) {
  return (
    <ThemeProvider>
      <Button {...props} />
    </ThemeProvider>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Notify',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = args => (
  <ButtonComponent {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Info = Template.bind({});
Info.args = {
  text: 'Push a info',
  onClick: () => toast.info('Your info updated!'),
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Push a warning',
  onClick: () => {
    toast.warn('Transaction risk!');
  },
};

export const Error = Template.bind({});
Error.args = {
  text: 'Push a error',
  onClick: () => {
    toast.error('Transaction failed!');
  },
};
