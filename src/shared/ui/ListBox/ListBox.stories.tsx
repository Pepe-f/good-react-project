import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items = [
  {
    value: 'Item 1',
    content: 'Item 1',
  },
  {
    value: 'Item 2',
    content: 'Item 2',
  },
  {
    value: 'Item 3',
    content: 'Item 3',
  },
];

export const Normal = Template.bind({});
Normal.args = {
  items,
  onChange: () => {},
  value: 'Select item',
  defaultValue: 'Select item',
};

export const DirectionTop = Template.bind({});
DirectionTop.args = {
  items,
  onChange: () => {},
  value: 'Select item',
  defaultValue: 'Select item',
  direction: 'top',
};

export const Readonly = Template.bind({});
Readonly.args = {
  items,
  onChange: () => {},
  value: 'Select item',
  defaultValue: 'Select item',
  readOnly: true,
};
