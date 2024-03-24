import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "../components/footer/Footer";

const meta = {
  title: "Example/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
