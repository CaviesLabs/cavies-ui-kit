import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, Title, Body, Caption, SmallText } from '../browser';
import type {
  TitleProps,
  BodyProps,
  CaptionProps,
  SmallTextProps,
} from '../browser';

/**
 * @dev Export tile componet
 * @param {props} Title props
 * @returns
 */
function TitleComponent(props: TitleProps & { text: string }) {
  return (
    <ThemeProvider>
      <Title {...props}>{props.text}</Title>
    </ThemeProvider>
  );
}

/**
 * @dev Export body component
 * @param {props} Body props
 * @returns @var {component}
 */
function BodyComponent(props: BodyProps & { text: string }) {
  return (
    <ThemeProvider>
      <Body {...props}>{props.text}</Body>
    </ThemeProvider>
  );
}

/**
 * @dev Export caption component
 * @param {props} Caption props.
 * @returns @var {component}
 */
function CaptionComponent(props: CaptionProps & { text: string }) {
  return (
    <ThemeProvider>
      <Caption {...props}>{props.text}</Caption>
    </ThemeProvider>
  );
}

/**
 * @dev SmallText component
 * @param {props} SmallText props.
 * @returns @var {component}
 */
function SmallTextComponent(props: SmallTextProps & { text: string }) {
  return (
    <ThemeProvider>
      <SmallText {...props}>{props.text}</SmallText>
    </ThemeProvider>
  );
}

/** @reference More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export */
export default {
  title: 'Example/Typography',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Title>;

/**
 * @dev Define template for title components.
 * @reference More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * @param {args} Arguments present for component props.
 * @returns @param {template}
 */
const TitleTemplate: ComponentStory<typeof TitleComponent> = args => (
  <TitleComponent {...args} />
);

/** @reference More on args: https://storybook.js.org/docs/react/writing-stories/args */
export const LargeTitle = TitleTemplate.bind({});
LargeTitle.args = {
  type: 'large',
  text: 'Large title',
};
export const MediumTitle = TitleTemplate.bind({});
MediumTitle.args = {
  type: 'medium',
  text: 'Medium title',
};
export const SmallTitle = TitleTemplate.bind({});
SmallTitle.args = {
  type: 'title',
  text: 'Small Title',
};
export const HeadlineTitle = TitleTemplate.bind({});
HeadlineTitle.args = {
  type: 'headline',
  text: 'Headline Title',
};
export const SubHeadlineTitle = TitleTemplate.bind({});
SubHeadlineTitle.args = {
  type: 'sub-headline',
  text: 'Sub headline Title',
};

/**
 * @dev Define template for body components
 * @reference More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * @param {args} Arguments present for component props.
 * @returns @param {template}
 */
const BodyTemplate: ComponentStory<typeof BodyComponent> = args => (
  <BodyComponent {...args} />
);
/** @reference More on args: https://storybook.js.org/docs/react/writing-stories/args */
export const NormalBody = BodyTemplate.bind({});
NormalBody.args = {
  type: 'normal',
  text: 'This is normal body',
};
export const RegularBody = BodyTemplate.bind({});
RegularBody.args = {
  type: 'regular',
  text: 'This is regular body',
};

/**
 * @dev Define template for catpion components
 * @reference More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * @param {args} Arguments present for component props.
 * @returns @param {template}
 */
const CaptionTemplate: ComponentStory<typeof CaptionComponent> = args => (
  <CaptionComponent {...args} />
);
/** @reference More on args: https://storybook.js.org/docs/react/writing-stories/args */
export const NormalCaption = CaptionTemplate.bind({});
NormalCaption.args = {
  type: 'normal',
  text: 'This is normal caption',
};
export const RegularCaption = CaptionTemplate.bind({});
RegularCaption.args = {
  type: 'regular',
  text: 'This is regular caption',
};

/**
 * @dev Define template for small-text components
 * @reference More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * @param {args} Arguments present for component props.
 * @returns @param {template}
 */
const SmallTextTemplate: ComponentStory<typeof SmallTextComponent> = args => (
  <SmallTextComponent {...args} />
);
/** @reference More on args: https://storybook.js.org/docs/react/writing-stories/args */
export const NormalSmallText = SmallTextTemplate.bind({});
NormalSmallText.args = {
  type: 'normal',
  text: 'This is normal small text',
};
export const RegularSmallText = SmallTextTemplate.bind({});
RegularSmallText.args = {
  type: 'regular',
  text: 'This is regular small text',
};
