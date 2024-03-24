import type { Meta, StoryObj } from "@storybook/react";

import BlurredImage from "../components/blurred-image/BlurredImage";

const meta = {
  title: "Example/BlurredImage",
  component: BlurredImage,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    src: "https://picsum.photos/399",
    alt: "Alt text here",
    width: 400,
    height: 400
  },
} satisfies Meta<typeof BlurredImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    src: "https://picsum.photos/399",
    alt: "Alt text here",
    width: 400,
    height: 400
  },
};
