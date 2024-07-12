import React from "react";
import { Spinner } from "./Spinner";

export default {
  title: "Component/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

const Template = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: "spinner",
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
