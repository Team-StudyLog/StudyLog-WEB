import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../components/Input/TextInput.tsx";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select" },
    value: { control: "text" }, // 텍스트 입력 값을 제어
    onChange: { action: "changed" }, // 입력 값 변경 이벤트를 액션으로 로그
    placeholder: { control: "text" }, // 플레이스홀더 텍스트를 제어
    id: { control: "text" }, // 입력 필드의 ID를 제어
    maxLength: { control: "number" }, // 최대 길이를 숫자로 제어
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// 기본 텍스트 입력
export const Default: Story = {
  args: {
    type: "title",
    id: "default-text-input",
    value: "",
    placeholder: "검색어를 입력하세요.",
    maxLength: 20,
  },
};

export const Content: Story = {
  args: {
    type: "content",
    id: "content-text-input",
    value: "",
    placeholder: "내용을 입력하세요.",
    maxLength: 100,
  },
};
