import InputLabel from "../../../components/Label/InputLabel.tsx";
import TextInput from "../../../components/Input/TextInput.tsx";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import {
  formContent,
  formHeaderWrapper,
} from "../../auth/signup/SignupPage.styles.ts";
import { usePostRecord } from "../../../apis/record/usePostRecord.ts";
import type { Category } from "../recordWrite/RecordWritePage.tsx";
import { usePutRecord } from "../../../apis/record/usePutRecord.ts";
import { useParams } from "react-router-dom";

interface SecondRecordFormPageProps {
  currentPage: number;
  totalPage: number;
  type: "write" | "edit";
  selectedCategory?: Category | null;
  title?: string;
  setTitle?: (title: string) => void;
  content?: string;
  setContent?: (content: string) => void;
}

const SecondRecordFormPage = ({
  currentPage = 2,
  totalPage = 2,
  type = "write",
  selectedCategory,
  title = "",
  setTitle = () => {},
  content = "",
  setContent = () => {},
}: SecondRecordFormPageProps) => {
  const recordId = Number(useParams<{ recordId: string }>().recordId);
  const { mutate: postRecord, isPending: isRecordPosting } = usePostRecord();
  const { mutate: editRecord, isPending: isRecordEditing } =
    usePutRecord(recordId);

  const isButtonDisabled =
    title.length === 0 ||
    title.length > 20 ||
    content.length < 10 ||
    content.length > 400 ||
    isRecordPosting ||
    isRecordEditing;

  const handleSubmit = () => {
    if (type === "write" && selectedCategory?.id)
      postRecord({
        categoryId: selectedCategory?.id,
        title: title,
        content: content,
      });
    if (type === "edit" && selectedCategory?.id) {
      editRecord({
        categoryId: selectedCategory?.id,
        title: title,
        content: content,
      });
    }
  };

  return (
    <>
      <div className={formContent}>
        <div className={`${formHeaderWrapper} mb-[8px]`}>
          <p className={`text-gray-700`}>{currentPage}</p>
          <p className={`text-gray-400`}>/{totalPage}</p>
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
            "학습한 내용을 구체적으로 적을수록 AI가 정확하고 수준에 맞는 퀴즈를 만들어 드릴 수 있어요. (10~200자)"
          }
          maxLength={400}
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
