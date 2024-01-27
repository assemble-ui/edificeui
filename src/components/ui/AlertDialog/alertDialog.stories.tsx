import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
  } from "./alertDialog"; // Update the import path as needed
  import { StoryFn } from "@storybook/react";
  
  export default {
    title: "Components/AlertDialog",
    component: AlertDialog,
    tags: ["autodocs"],
    parameters: {
      backgrounds: {
        default: "",
      },
    },
  };
  
  const Template: StoryFn<typeof AlertDialog> = (_args: any) => (
    <AlertDialog>
      <AlertDialogTrigger className="dark ">Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
  
  export const Default: StoryFn<typeof AlertDialog> = Template.bind({});
  Default.args = {};
  