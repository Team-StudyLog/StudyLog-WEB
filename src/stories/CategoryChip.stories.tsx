import type { Meta, StoryObj } from "@storybook/react";
import CategoryChip from "../components/Chips/CategoryChip.tsx";

const meta: Meta<typeof CategoryChip> = {
  title: "Components/Chips/CategoryChip",
  component: CategoryChip,
  tags: ["autodocs"],
  argTypes: {
    category: { control: "text" }, // 카테고리 이름을 텍스트로 제어
    color: { control: "color" }, // 색상을 색상 선택기로 제어
  },
};

export default meta;
type Story = StoryObj<typeof CategoryChip>;

// 기본 카테고리 칩
export const Default: Story = {
  args: {
    category: "미적분",
    color: "#FCD44F", // 기본 색상
  },
};
