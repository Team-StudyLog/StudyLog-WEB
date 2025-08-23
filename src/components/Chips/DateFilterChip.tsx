import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormatWithDot, dateToSlash } from "../../utils/dateFormat";
// import { DatePicker } from "antd";
import DatePicker from "react-datepicker";
// import "./DatePicker.css";

interface DateFilterChipProps {
  defaultLabel: string;
  selectedDate?: string;
  onSelect: (dateString: string) => void;
}

const DateFilterChip = ({
  defaultLabel,
  selectedDate,
  onSelect,
}: DateFilterChipProps) => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const isSelected =
    selectedDate !== undefined && selectedDate !== defaultLabel;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        datePickerOpen &&
        dateRef.current &&
        !dateRef.current.contains(e.target as Node)
      ) {
        setDatePickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [datePickerOpen]);

  const handleDateChange = (date: Date | null) => {
    if (!date) return;
    setSelected(date);
    const formatted = dateToSlash(date);
    onSelect(formatted);
    setDatePickerOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dateRef}>
      <button
        onClick={() => setDatePickerOpen((prev) => !prev)}
        className={`px-[12px] py-[7.5px] rounded-[20px] border font-body07-regular-14 flex items-center gap-[5px]
          ${
            isSelected
              ? "text-green-300 border-green-300"
              : "text-gray-600 border-gray-300"
          }`}
      >
        {isSelected ? dateFormatWithDot(selectedDate) : defaultLabel}
        <ChevronDown
          size={18}
          className={`${isSelected ? "text-green-300" : "text-gray-300"}`}
        />
      </button>

      {datePickerOpen && (
        <div className="absolute mt-2 z-20">
          <DatePicker selected={selected} onChange={handleDateChange} inline />
          {/*<DatePicker onChange={(date) => console.log(date)} />*/}
        </div>
      )}
    </div>
  );
};

export default DateFilterChip;
