import React from "react";
import { Progress } from "./Progress";

export default {
  title: "Component/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    percent: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <Progress {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: "progress",
  size: "medium",
};
export const Large = Template.bind({});
Large.args = {
  id: "Large",
  size: "large",
};
export const Small = Template.bind({});
Small.args = {
  id: "Small",
  size: "small",
};
