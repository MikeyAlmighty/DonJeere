import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from '../components/header/Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Header',
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Header',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Header',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Header',
//   },
// };
