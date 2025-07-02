import type { Meta, StoryObj } from "@storybook/react";
import ButtonWithArrow from "../components/Button/ButtonWithArrow.tsx";

const meta: Meta<typeof ButtonWithArrow> = {
  title: "Components/ButtonWithArrow",
  component: ButtonWithArrow,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    className: { control: "text" }, // 클래스 이름을 텍스트로 제어
    onClick: { action: "clicked" }, // 클릭 이벤트를 액션으로 로그
  },
};

export default meta;
type Story = StoryObj<typeof ButtonWithArrow>;

// 기본 버튼
export const Default: Story = {
  args: {
    text: "버튼 텍스트",
    className: "font-head06-semibold-16 text-gray-700",
  },
};

// 커스텀 클래스 이름
export const CustomClassName: Story = {
  args: {
    text: "커스텀 클래스 버튼",
    className: "text-lg text-blue-600 font-bold",
  },
};
