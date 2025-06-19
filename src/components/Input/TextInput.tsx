import React, { type TextareaHTMLAttributes } from "react";
import { Info } from "lucide-react";

interface TextInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: "title" | "content";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  errorText?: string;
}

const TextInput = ({
  type = "title",
  value,
  onChange,
  placeholder = "제목을 입력하세요",
  maxLength = 20,
  errorText = "",
}: TextInputProps) => {
  const isError = value.length > maxLength;

  return (
    <div className="flex flex-col gap-[6px] w-full">
      <div
        className={`
        ${type === "title" ? "flex" : "flex-col"} 
        bg-white rounded-[8px] border p-[20px] w-full
          ${isError ? "border-red" : "border-gray-400"}
        `}
      >
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={1}
          className={`
            w-full resize-none overflow-hidden
            font-body07-regular-14 text-gray-700 placeholder-gray-500
            outline-none bg-transparent
          `}
          style={{
            minHeight: type === "title" ? "auto" : "80px",
          }}
        />
        <div className="flex justify-end font-body07-regular-14 text-gray-500">
          <span className={isError ? "text-red" : "text-gray-500"}>
            {value.length}
          </span>
          /{maxLength}
        </div>
      </div>
      {isError && errorText && (
        <div className="flex items-center gap-2 ps-1 text-red">
          <Info size={12} />
          <span className="font-body09-medium-10">{errorText}</span>
        </div>
      )}
    </div>
  );
};

export default TextInput;
