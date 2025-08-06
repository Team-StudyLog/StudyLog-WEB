import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import BottomSheet from "../BottomSheet/BottomSheet";
import BottomButton from "../Button/BottomButton";
import RadioCategoryButton from "../Button/RadioCategoryButton";

interface CategoryFilterChipProps {
  defaultLabel: string;
  options: { id: number; name: string; color: string }[];
  selectedOption?: number;
  onSelect: (option: number) => void;
}

const CategoryFilterChip = ({
  defaultLabel,
  options,
  selectedOption,
  onSelect,
}: CategoryFilterChipProps) => {
  const [sheetState, setSheetState] = useState<"closed" | "default">("closed");
  const [tempSelected, setTempSelected] = useState<number | null>(
    selectedOption ?? null
  );

  useEffect(() => {
    setTempSelected(selectedOption ?? null);
  }, [selectedOption]);

  const isSelected = selectedOption !== undefined;

  const selectedLabel =
    options.find((o) => o.id === selectedOption)?.name ?? defaultLabel;

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setSheetState("default")}
        className={`px-[12px] py-[7.5px] rounded-[20px] border font-body07-regular-14 flex items-center gap-[5px]
          ${
            isSelected
              ? "text-green-300 border-green-300"
              : "text-gray-600 border-gray-300"
          }`}
      >
        {selectedLabel}
        <ChevronDown
          size={18}
          className={`${isSelected ? "text-green-300" : "text-gray-300"}`}
        />
      </button>

      <BottomSheet
        animateState={sheetState}
        handleAnimateChange={(state) => {
          if (state === "closed") {
            setSheetState("closed");
            setTempSelected(selectedOption ?? null);
          }
        }}
      >
        <div className="flex flex-col h-full pb-[20px]">
          <section className="flex flex-col grow px-[26px] py-[20px] overflow-y-auto">
            <h2 className="text-center font-head06-semibold-16 mb-[20px] text-gray-700">
              카테고리 선택
            </h2>
            <div className="grid grid-cols-3 gap-x-[4px] gap-y-[6px]">
              {options.map((option) => (
                <RadioCategoryButton
                  key={option.id}
                  text={option.name}
                  color={option.color}
                  checked={tempSelected === option.id}
                  onChange={() => {
                    setTempSelected((prev) =>
                      prev === option.id ? null : option.id
                    );
                  }}
                />
              ))}
            </div>
          </section>
          <BottomButton
            text="완료"
            onClick={() => {
              if (tempSelected !== null) {
                onSelect(tempSelected);
              }
              setSheetState("closed");
            }}
          />
        </div>
      </BottomSheet>
    </div>
  );
};

export default CategoryFilterChip;
