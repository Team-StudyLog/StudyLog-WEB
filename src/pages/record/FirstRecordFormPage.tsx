import BottomButton from "../../components/Button/BottomButton.tsx";
import CategoryInput from "../../components/Input/CategoryInput.tsx";
import InputLabel from "../../components/Label/InputLabel.tsx";
import {
  formContent,
  formHeaderWrapper,
} from "../auth/signup/SignupPage.styles.ts";
import { useFetchCategoryList } from "../../apis/record/useFetchCateogoryList.ts";

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
  const { data: categories } = useFetchCategoryList();

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
          categories={categories?.map((c) => c.name) || []}
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
