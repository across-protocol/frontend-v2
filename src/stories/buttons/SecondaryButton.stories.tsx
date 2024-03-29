import type { Meta, StoryObj } from "@storybook/react";

import { SecondaryButton } from "../../components/Button";

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
  argTypes: {
    borderColor: {
      control: {
        type: "select",
      },
    },
    hoveredBorderColor: {
      control: {
        type: "select",
      },
    },
    textColor: {
      control: {
        type: "select",
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["lg", "md", "sm"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SecondaryButton>;

export const Secondary: Story = {
  render: (args) => (
    <SecondaryButton {...args}>Secondary Button</SecondaryButton>
  ),
};
