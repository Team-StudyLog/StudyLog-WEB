import InputLabel from "../../components/Label/InputLabel.tsx";
import TextInput from "../../components/Input/TextInput.tsx";
import BottomButton from "../../components/Button/BottomButton.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import {
  formContent,
  formHeaderWrapper,
} from "../auth/signup/SignupPage.styles.ts";

interface SecondRecordFormPageProps {
  type: "write" | "edit";
  selectedCategory?: string | null;
  title?: string;
  setTitle?: (title: string) => void;
  content?: string;
  setContent?: (content: string) => void;
}

const SecondRecordFormPage = ({
  type = "write",
  selectedCategory,
  title = "",
  setTitle = () => {},
  content = "",
  setContent = () => {},
}: SecondRecordFormPageProps) => {
  const { goBack } = useEasyNavigate();
  const isButtonDisabled =
    title.length === 0 ||
    title.length > 20 ||
    content.length === 0 ||
    content.length > 200;

  const handleSubmit = () => {
    console.log(type, title, content, selectedCategory);
    goBack();
  };

  return (
    <>
      <div className={formContent}>
        <div className={`${formHeaderWrapper} mb-[8px]`}>
          <p className={`text-gray-700`}>2</p>
          <p className={`text-gray-400`}>/2</p>
        </div>
        <InputLabel label={"제목을 입력해주세요"} htmlFor={"title"} />
        <TextInput
          type={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id={"title"}
          placeholder={"학습한 내용의 제목을 입력해주세요"}
          maxLength={20}
        />
        <div className={`h-[88px]`} />
        <InputLabel label={"내용을 입력해주세요"} htmlFor={"content"} />
        <TextInput
          type={"content"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id={"content"}
          placeholder={
            "학습한 내용을 구체적으로 적을수록 AI가 정확하고 수준에 맞는 퀴즈를 만들어 드릴 수 있어요."
          }
          maxLength={200}
        />
      </div>
      <BottomButton
        text={"다음"}
        onClick={() => {
          handleSubmit();
        }}
        disabled={isButtonDisabled}
      />
    </>
  );
};

export default SecondRecordFormPage;
