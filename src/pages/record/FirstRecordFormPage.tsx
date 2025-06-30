import BottomButton from "../../components/Button/BottomButton.tsx";
import CategoryInput from "../../components/Input/CategoryInput.tsx";
import InputLabel from "../../components/Label/InputLabel.tsx";
import {
  formContent,
  formHeaderWrapper,
} from "../auth/signup/SignupPage.styles.ts";

interface FirstRecordFormPageProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
  onNext: () => void;
}

const FirstRecordFormPage = ({
  selectedCategory,
  setSelectedCategory,
  onNext,
}: FirstRecordFormPageProps) => {
  const categories = [
    "미적분",
    "기하와 벡터",
    "스프링",
    "백엔드",
    "안드로이드",
  ];

  return (
    <>
      <div className={formContent}>
        <div className={`${formHeaderWrapper} mb-[8px]`}>
          <p className={`text-gray-700`}>1</p>
          <p className={`text-gray-400`}>/2</p>
        </div>
        <InputLabel label={"카테고리를 선택해주세요"} htmlFor={"category"} />
        <CategoryInput
          id="category"
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>
      <BottomButton
        text={"다음"}
        disabled={selectedCategory == null}
        onClick={onNext}
      />
    </>
  );
};

export default FirstRecordFormPage;
