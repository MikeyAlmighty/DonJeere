import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../components/card/Card";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { description: "This is a description" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    description: "This is a description",
    primary: true
  },
};