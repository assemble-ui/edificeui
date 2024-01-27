import { Meta, StoryFn } from "@storybook/react";
import { Badge, badgeVariants } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {},
  parameters: {
    // backgrounds: {
    //   default: "dark",
    // },
  },
  //   args: {
  //     children: "Badge",
  //   },
};

export default meta;

export const Base: StoryFn = {
    render: (args) => <Badge {...args}>‌Button</Badge>,
    args: {},
}
  
// const Template: StoryFn<typeof Badge> = (_args: any) => (
//   <Badge>Badge</Badge>
  
// );

export const Outline: StoryFn = {
    render: (args) => <Badge {...args}>‌Button</Badge>,
    args: {
      variant: "outline",
    },
  }
export const Secondary: StoryFn = {
    render: (args) => <Badge {...args}>‌Button</Badge>,
    args: {
      variant: "secondary",
    },
  }
export const Destructive: StoryFn = {
    render: (args) => <Badge {...args}>‌Button</Badge>,
    args: {
      variant: "destructive",
    },
  }
  

// export const Secondary: StoryFn<typeof Button> = Template.bind({});
// Secondary.args = {
//   variant: "secondary",
// };
// export const Destructive: StoryFn<typeof Button> = Template.bind({});
// Destructive.args = {
//   variant: "destructive",
// };
