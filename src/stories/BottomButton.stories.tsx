// BottomButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import BottomButton from "../components/Button/BottomButton.tsx";

const meta: Meta<typeof BottomButton> = {
  title: "Components/BottomButton", // Storybook 좌측 사이드바에 표시될 이름
  component: BottomButton,
  tags: ["autodocs"], // 자동 문서 생성 지원 (선택)
  argTypes: {
    text: { control: "text" },
    onClick: { action: "clicked" }, // 클릭 이벤트를 액션으로 로그
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof BottomButton>;

// 기본 버튼
export const Default: Story = {
  args: {
    text: "확인",
    disabled: false,
  },
};

// 비활성화된 버튼
export const Disabled: Story = {
  args: {
    text: "확인",
    disabled: true,
  },
};

// 커스텀 텍스트
export const CustomText: Story = {
  args: {
    text: "다음 단계로 이동",
  },
};
