import {
  formContent,
  formPageStyle,
} from "../../auth/signup/SignupPage.styles.ts";
import TextHeader from "../../../components/Header/TextHeader.tsx";
import InputLabel from "../../../components/Label/InputLabel.tsx";
import TextInput from "../../../components/Input/TextInput.tsx";
import { useState } from "react";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";

interface CategoryFormPageProps {
  type: "write" | "edit";
}

const CategoryFormPage = ({ type }: CategoryFormPageProps) => {
  const { goBack } = useEasyNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("");

  return (
    <div className={formPageStyle}>
      <TextHeader text={type === "write" ? "카테고리 추가" : "카테고리 편집"} />
      <div className={`${formContent} mt-[33px]`}>
        <InputLabel
          label={"카테고리 이름을 입력해주세요"}
          htmlFor={"categoryName"}
        />
        <TextInput
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder={"카테고리 이름을 입력해주세요"}
          id={"categoryName"}
          maxLength={10}
        />
        <div className={`h-[88px]`} />
        <InputLabel
          label={"카테고리 색상을 선택해주세요"}
          htmlFor={"categoryColor"}
        />
        <div
          className={`w-full bg-white border border-gray-200 rounded-[8px] px-[33px] py-[24px]
          grid grid-cols-2`}
        ></div>
      </div>
      <BottomButton
        text={"완료"}
        onClick={goBack}
        disabled={!categoryName || !categoryColor}
      />
    </div>
  );
};

export default CategoryFormPage;
