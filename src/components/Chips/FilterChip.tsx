import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { dateFormatWithZeroAndDot } from "../../utils/dateFormat.ts";
import type { BottomSheetState } from "../../types/types.ts";
import BottomSheet from "../BottomSheet/BottomSheet.tsx";
import BottomButton from "../Button/BottomButton.tsx";
import RadioCategoryButton from "../Button/RadioCategoryButton.tsx";

interface FilterChipProps {
  type: "category" | "date";
  defaultLabel: string;
  options: { name: string; color: string }[];
  selectedOption?: string;
  onSelect: (option: string) => void;
}

const FilterChip = ({
  type,
  defaultLabel,
  options,
  selectedOption,
  onSelect,
}: FilterChipProps) => {
  const [bottomSheetState, setBottomSheetState] =
    useState<BottomSheetState>("closed");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<string>(
    selectedOption ?? ""
  );
  const dateRef = useRef<HTMLDivElement>(null);

  const isSelected =
    selectedOption !== undefined && selectedOption !== defaultLabel;
  const label = isSelected ? selectedOption : defaultLabel;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        type === "date" &&
        datePickerOpen &&
        dateRef.current &&
        !dateRef.current.contains(event.target as Node)
      ) {
        setDatePickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [datePickerOpen, type]);

  useEffect(() => {
    if (type === "category") {
      setTempSelected(selectedOption ?? "");
    }
  }, [selectedOption, type]);

  const handleDateChange = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    const formatted = dateFormatWithZeroAndDot(
      date.toLocaleDateString("ko-KR")
    );
    onSelect(formatted);
    setDatePickerOpen(false);
  };

  const handleClick = () => {
    if (type === "category") {
      setBottomSheetState("default");
    } else if (type === "date") {
      setDatePickerOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative inline-block"
      ref={type === "date" ? dateRef : undefined}
    >
      <button
        onClick={handleClick}
        className={`px-[12px] py-[7.5px] rounded-[20px] border font-body07-regular-14 flex items-center gap-[5px]
          ${
            isSelected
              ? "text-green-300 border-green-300"
              : "text-gray-600 border-gray-300"
          }
        `}
      >
        {label}
        <ChevronDown
          size={18}
          className={`${isSelected ? "text-green-300" : "text-gray-300"}`}
        />
      </button>

      {type === "category" && (
        <BottomSheet
          animateState={bottomSheetState}
          handleAnimateChange={(state) => {
            if (state === "closed") {
              setBottomSheetState("closed");
              setTempSelected(selectedOption ?? ""); // 취소 시 원래 값 복원
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
                    key={option.name}
                    text={option.name}
                    color={option.color}
                    checked={tempSelected === option.name}
                    onChange={(value) => {
                      if (tempSelected === value) {
                        setTempSelected(defaultLabel);
                      } else {
                        setTempSelected(value);
                      }
                    }}
                  />
                ))}
              </div>
            </section>

            <BottomButton
              text={"완료"}
              onClick={() => {
                onSelect(tempSelected);
                setBottomSheetState("closed");
              }}
            />
          </div>
        </BottomSheet>
      )}

      {type === "date" && datePickerOpen && (
        <div className="absolute mt-2 z-20">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default FilterChip;
