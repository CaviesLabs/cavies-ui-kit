import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, Button, toast } from '../browser';
import type { ButtonProps } from '../browser';
import '../styles/css/main.css';

/**
 * @dev Export tile componet
 * @param {props} Title props
 * @returns
 */
function ButtonComponent(props: ButtonProps & { text: string }) {
  return (
    <ThemeProvider>
      <Button
        {...props}
        text="toastify"
        size="xsmall"
        containerStyle={{ width: '200px' }}
      />
    </ThemeProvider>
  );
}

/** @reference More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export */
export default {
  title: 'Cavies-UIKit/Toast',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonComponent>;

/**
 * @dev Define template for title components.
 * @reference More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * @param {args} Arguments present for component props.
 * @returns @param {template}
 */
const ToastTemplate: ComponentStory<typeof ButtonComponent> = args => (
  <ButtonComponent {...args} />
);

/** @reference More on args: https://storybook.js.org/docs/react/writing-stories/args */
export const Default = ToastTemplate.bind({});
Default.args = {
  text: 'Large title',
  onClick: () => toast('Primary toast'),
};

/** @reference More on args: https://storybook.js.org/docs/react/writing-stories/args */
export const Info = ToastTemplate.bind({});
Info.args = {
  text: 'Large title',
  onClick: () => toast.info('Info toast'),
};

/** @reference More on args: https://storybook.js.org/docs/react/writing-stories/args */
export const Warning = ToastTemplate.bind({});
Warning.args = {
  text: 'Large title',
  onClick: () => toast.warning('Info toast'),
};

/** @reference More on args: https://storybook.js.org/docs/react/writing-stories/args */
export const Error = ToastTemplate.bind({});
Error.args = {
  text: 'Large title',
  onClick: () => toast.error('Info toast'),
};
