import CategoryDot from "../Chips/CategoryDot.tsx";

interface RadioCategoryButtonProps {
  text: string;
  color: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const RadioCategoryButton = ({
  text,
  color,
  checked,
  onChange,
}: RadioCategoryButtonProps) => {
  const id = `radio-${text.replace(/\s+/g, "-")}`;

  const handleClick = () => {
    onChange?.(text);
  };

  return (
    <div className={`flex flex-1`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => {}}
        className="hidden"
      />
      <label
        htmlFor={id}
        onClick={handleClick}
        className={`w-full text-center font-body05-medium-14 py-[15px] px-[12px] rounded-[10px] cursor-pointer
          border ${checked ? "bg-green-100 border-green-300 text-gray-700" : "bg-gray-100 border-gray-100 text-gray-700"}
        `}
      >
        <div className="flex justify-between gap-[4px] items-center w-full">
          <CategoryDot color={color} />
          <span className="flex-1 ps-[-4px] text-center truncate">{text}</span>
        </div>
      </label>
    </div>
  );
};

export default RadioCategoryButton;
