import type { Meta, StoryObj } from "@storybook/react";
import { WorkCard } from "./WorkCard";
import hubside from "../../../assets/works/hubside.svg";

const meta = {
  title: "Atoms/WorkCard",
  component: WorkCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    picture: hubside,
    color: "#010043",
    title: "Title of project",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit consequatur, alias consectetur tenetur quas itaque error! Et eos.",
  },
};
