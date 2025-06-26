import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormatWithZeroAndDot } from "../../utils/dateFormat.ts";

interface FilterChipProps {
  type: "category" | "date";
  defaultLabel: string;
  options: string[];
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
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  const isSelected =
    selectedOption !== undefined && selectedOption !== defaultLabel;
  const label = isSelected ? selectedOption : defaultLabel;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chipRef.current && !chipRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    const formatted = dateFormatWithZeroAndDot(
      date.toLocaleDateString("ko-KR")
    );
    console.log(formatted);
    onSelect(formatted);
    setOpen(false);
  };

  return (
    <div className="relative inline-block" ref={chipRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
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

      {type === "category" && open && (
        <div className="absolute mt-2 w-full bg-white border border-gray-400 rounded-[10px] shadow z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className="px-[16px] py-[8px] text-gray-600 hover:bg-gray-100 cursor-pointer font-body09-medium-10"
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {type === "date" && open && (
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
