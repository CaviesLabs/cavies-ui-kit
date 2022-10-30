import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider, Button, toast } from '../lib.entrypoint';
import type { ButtonProps } from '../lib.entrypoint';
import '../styles/sass/main.css';

export function ToastComponent(props: ButtonProps) {
  return (
    <ThemeProvider>
      <Button {...props} />
    </ThemeProvider>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cavies-UIKit/Toast',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToastComponent> = args => (
  <ToastComponent {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  shape: 'primary',
  text: 'Primary Toast',
  onClick: () => toast('Sample notification'),
};
