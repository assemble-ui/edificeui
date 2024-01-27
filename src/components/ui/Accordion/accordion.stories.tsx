import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./accordion";
  import { Meta, StoryFn } from "@storybook/react";
  
  const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
      component: Accordion,
      tags: ["autodocs"],
    argTypes: {},
    parameters: {
      backgrounds: {
        // default: "dark",
      },
    },
    args: {
      children: "Accordion2",
    },
  };
  
  export default meta;
  
  const Template: StoryFn<typeof Accordion> = (_args: any) => (
    <Accordion type="single" collapsible>
      <AccordionItem value={"AccordionItem1"}>
        <AccordionTrigger>Accordion Item 1</AccordionTrigger>
        <AccordionContent>Content for Accordion Item 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value={"AccordionItem2"}>
        <AccordionTrigger>Accordion Item 2</AccordionTrigger>
        <AccordionContent>Content for Accordion Item 2</AccordionContent>
      </AccordionItem>
      {/* Add more items as needed */}
    </Accordion>
  );
  
  export const Default: StoryFn<typeof Accordion> = Template.bind({});
  Default.args = {};
  
  // export const Secondary: StoryFn<typeof Button> = Template.bind({});
  // Secondary.args = {
  //   variant: "secondary",
  // };
  // export const Destructive: StoryFn<typeof Button> = Template.bind({});
  // Destructive.args = {
  //   variant: "destructive",
  // };
  