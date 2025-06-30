import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CategoryInputProps {
  id: string;
  categories: string[];
  selected?: string | null;
  onSelect: (value: string) => void;
}

const CategoryInput = ({
  id,
  categories,
  selected,
  onSelect,
}: CategoryInputProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        id={id}
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between items-center bg-white border border-gray-400
        rounded-[8px] p-[16px] cursor-pointer"
      >
        <p className={`font-body07-regular-14`}>{selected}</p>
        <ChevronDown size={24} className={`text-gray-400`} />
      </div>

      {open && (
        <ul
          className="absolute z-10 top-[100%] left-0 w-full bg-white border border-gray-400 rounded-[10px]
        mt-[6px] overflow-y-auto shadow-md py-[6px]"
        >
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => {
                onSelect(category);
                setOpen(false);
              }}
              className={`hover:bg-gray-100 px-[18px] py-[12px] font-body07-regular-14 cursor-pointer text-gray-700`}
            >
              {category}
            </li>
          ))}
          <li
            className={`px-[18px] py-[12px] hover:bg-gray-100 text-gray-500 font-body07-regular-14 cursor-pointer`}
          >
            + 카테고리 추가하기
          </li>
        </ul>
      )}
    </div>
  );
};

export default CategoryInput;
