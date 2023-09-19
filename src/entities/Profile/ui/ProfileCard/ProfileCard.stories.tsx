import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'Kopylov',
    first: 'Nikita',
    currency: Currency.RUB,
    city: 'Moscow',
    avatar:
      'https://yt4.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
