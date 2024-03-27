import type { Meta, StoryObj } from "@storybook/react";
import { TechnologyCard } from "./TechnologyCard";

const meta = {
  title: "Molecules/TechnologyCard",
  component: TechnologyCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TechnologyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "laravel",
  },
};
