import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';
import { Icons } from '../../icons';

export default {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
} as Meta;

const Template: Story = (args) => (
    <Alert>
    <Icons.Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>
);

export const Default = Template.bind({});
Default.args = {};

export const Destructive: Story = {
    render: (args) => <Alert variant="destructive">
    <Icons.alertCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>,
    args: {
      variant: "destructive",
    },
  }

Destructive.args = {
  variant: 'destructive',
};
