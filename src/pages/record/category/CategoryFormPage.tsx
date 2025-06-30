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
  const [categoryColor, setCategoryColor] = useState<string | null>(null);
  const colors = [
    "#D895A6",
    "#A7C9F7",
    "#E8C1C1",
    "#CAD1E0",
    "#B5E1B2",
    "#A0A3FE",
    "#F6D68C",
    "#C9BAF3",
    "#9E9EA3",
    "#FFB877",
  ];

  const handleSubmit = () => {
    const actionMessage = type === "write" ? "추가" : "수정";
    alert(`카테고리가 ${actionMessage}되었습니다.`);
    console.log(categoryName, categoryColor);
    goBack();
  };

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
          className={`w-full bg-white border border-gray-200 rounded-[8px] py-[10px] px-[24px]
          grid grid-cols-2 gap-[4px]`}
        >
          {colors.map((color, index) => (
            <div className={`flex flex-1`}>
              <input
                type="checkbox"
                id={"categoryColor" + index}
                checked={categoryColor === color}
                onChange={() => {}}
                className="hidden"
              />
              <label
                htmlFor={"categoryColor" + index}
                onClick={() =>
                  setCategoryColor(categoryColor === color ? null : color)
                }
                className={`w-full py-[15px] px-[12px] rounded-[10px] cursor-pointer
          border ${categoryColor === color ? "border-green-300 " : "bg-white border-white "}
        `}
              >
                <div className="flex justify-between gap-x-[14px] items-center w-full">
                  <div
                    style={{ backgroundColor: color }}
                    className={`h-[23px] w-[23px] rounded-full`}
                  />
                  <span
                    style={{ color: color }}
                    className="flex-1 font-body04-medium-16 truncate"
                  >
                    카테고리 {index + 1}
                  </span>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
      <BottomButton
        text={"완료"}
        onClick={handleSubmit}
        disabled={!categoryName || !categoryColor}
      />
    </div>
  );
};

export default CategoryFormPage;
