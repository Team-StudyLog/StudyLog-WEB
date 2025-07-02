import type { Meta, StoryObj } from "@storybook/react";
import DateChip from "../components/Chips/DateChip.tsx";

const meta: Meta<typeof DateChip> = {
  title: "Components/Chips/DateChip",
  component: DateChip,
  tags: ["autodocs"],
  argTypes: {
    date: { control: "text" }, // 날짜를 날짜 선택기로 제어
  },
};

export default meta;
type Story = StoryObj<typeof DateChip>;

// 기본 날짜 칩
export const Default: Story = {
  args: {
    date: "2023-10-01", // 기본 날짜
  },
};
