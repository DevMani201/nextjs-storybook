import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TestingButton } from "./testing-button";

export default {
  title: "testing-button",
  component: TestingButton,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof TestingButton>;

const Template: ComponentStory<typeof TestingButton> = (args) => (
  <TestingButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Testing Primary Button",
  size: "small",
  color: "blue",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Testing Secondary Button",
  size: "large",
  color: "red",
};
