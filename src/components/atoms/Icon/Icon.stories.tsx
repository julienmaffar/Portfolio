import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      options: [
        "laravel",
        "react",
        "wordpress",
        "redux",
        "teacher",
        "css",
        "next",
        "figma",
        "linkedin",
        "sass",
        "js",
        "github",
        "nest",
        "fiverr",
        "docker",
        "mysql",
        "mongodb",
        "malt",
        "express",
        "adonis",
        "html",
        "node",
      ],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "laravel",
    size: "default",
  },
};
