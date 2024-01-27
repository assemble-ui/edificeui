import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AspectRatio } from './AspectRatio';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
} as Meta;

const Template: Story = (args) => (
    <AspectRatio ratio={16 / 9} className="shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]">
     <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
  </AspectRatio>
);

export const Default = Template.bind({});

