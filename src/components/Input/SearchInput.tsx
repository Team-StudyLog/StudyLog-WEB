import React, { type InputHTMLAttributes } from "react";
import { EllipsisVertical, Search, UserRoundPlus } from "lucide-react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "default" | "friend";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onClick?: () => void;
}

const SearchInput = ({
  type = "default",
  value,
  onChange,
  placeholder = "검색어를 입력하세요",
  onClick = () => {},
}: SearchInputProps) => {
  return (
    <div
      className={`flex w-full bg-white rounded-[10px] border border-gray-400 p-[17px] gap-[11px]`}
    >
      <Search size={18} className={`text-gray-500`} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`flex-1 font-body05-medium-14 text-gray-700 placeholder-gray-500
        outline-none bg-transparent`}
        onClick={onClick}
      />
      {type === "default" && (
        <EllipsisVertical size={18} className={`text-gray-500`} />
      )}
      {type === "friend" && (
        <UserRoundPlus
          size={18}
          className={`text-gray-500`}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default SearchInput;
