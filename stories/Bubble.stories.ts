import type { Meta, StoryObj } from "@storybook/react";

import {Bubble} from "../components/bubble/Bubble";

const meta = {
  title: "Example/Bubble",
  component: Bubble,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { text: ""},
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Text Here",
  },
};

export const Secondary: Story = {
  args: {
    text: "Text Here",
    primary: false
  },
};
