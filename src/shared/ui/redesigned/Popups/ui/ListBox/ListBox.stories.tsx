import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

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

export const DirectionTopLeft = Template.bind({});
DirectionTopLeft.args = {
  items,
  onChange: () => {},
  value: 'Select item',
  defaultValue: 'Select item',
  direction: 'top left',
};

export const DirectionTopRight = Template.bind({});
DirectionTopRight.args = {
  items,
  onChange: () => {},
  value: 'Select item',
  defaultValue: 'Select item',
  direction: 'top right',
};

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = {
  items,
  onChange: () => {},
  value: 'Select item',
  defaultValue: 'Select item',
  direction: 'bottom left',
};

export const DirectionBottomRight = Template.bind({});
DirectionBottomRight.args = {
  items,
  onChange: () => {},
  value: 'Select item',
  defaultValue: 'Select item',
  direction: 'bottom right',
};

export const Readonly = Template.bind({});
Readonly.args = {
  items,
  onChange: () => {},
  value: 'Select item',
  defaultValue: 'Select item',
  readOnly: true,
};
