import BottomButton from "../../../components/Button/BottomButton.tsx";
import CategoryInput from "../../../components/Input/CategoryInput.tsx";
import InputLabel from "../../../components/Label/InputLabel.tsx";
import {
  formContent,
  formHeaderWrapper,
} from "../../auth/signup/SignupPage.styles.ts";
import { useFetchCategoryList } from "../../../apis/record/useFetchCateogoryList.ts";
import type { Category } from "../recordWrite/RecordWritePage.tsx";

interface FirstRecordFormPageProps {
  currentPage: number;
  totalPage: number;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category) => void;
  onNext: () => void;
}

const FirstRecordFormPage = ({
  currentPage = 1,
  totalPage = 2,
  selectedCategory,
  setSelectedCategory,
  onNext,
}: FirstRecordFormPageProps) => {
  const { data: categories } = useFetchCategoryList();

  return (
    <>
      <div className={formContent}>
        <div className={`${formHeaderWrapper} mb-[8px]`}>
          <p className={`text-gray-700`}>{currentPage}</p>
          <p className={`text-gray-400`}>/{totalPage}</p>
        </div>
        <InputLabel label={"카테고리를 선택해주세요"} htmlFor={"category"} />
        <CategoryInput
          id="category"
          categories={categories?.map((c) => c.name) || []}
          selected={selectedCategory?.name}
          onSelect={(name) => {
            const category = categories?.find((c) => c.name === name);
            if (category) {
              setSelectedCategory(category);
            }
          }}
        />
      </div>
      <BottomButton
        text={"다음"}
        // disabled={selectedCategory == null}
        disabled={false}
        onClick={onNext}
      />
    </>
  );
};

export default FirstRecordFormPage;
