import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Common/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button>Hello button</Button>