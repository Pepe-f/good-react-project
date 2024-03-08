import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/consts/theme';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'l',
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
  children: 'Text',
  variant: 'outline',
  size: 'xl',
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  square: true,
  size: 'l',
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
  children: '>',
  square: true,
  size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Текст',
  variant: 'outline',
  disabled: true,
};
