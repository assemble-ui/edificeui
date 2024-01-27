import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
} as Meta;

const Template: Story = (args) => (
    <Avatar>
    <AvatarImage src="https://cdn.sanity.io/images/leteywlz/production/5d9adc161e50c69a8165276ee1d0cc05aa125c43-408x408.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  
);

export const Default = Template.bind({});
Default.args = {};
