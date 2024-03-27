import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "./ServiceCard";

const meta = {
  title: "Molecules/ServiceCard",
  component: ServiceCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneIcon: Story = {
  args: {
    firstIcon: "adonis",
    title: "Title of card",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero ea cum excepturi sit unde tempore maxime repellat error fuga incidunt quae mollitia inventore totam eligendi, ullam minima earum provident.",
  },
};

export const TwoIcon: Story = {
  args: {
    firstIcon: "laravel",
    secondIcon: "laravel",
    title: "Title of card",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero ea cum excepturi sit unde tempore maxime repellat error fuga incidunt quae mollitia inventore totam eligendi, ullam minima earum provident.",
  },
};
