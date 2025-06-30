interface RadioButtonProps {
  text: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const RadioButton = ({ text, checked, onChange }: RadioButtonProps) => {
  const id = `radio-${text.replace(/\s+/g, "-")}`;

  const handleClick = () => {
    onChange?.(text);
  };

  return (
    <div className="flex flex-1">
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
        className={`w-full text-center font-body05-medium-14 py-[15px] rounded-[10px] cursor-pointer
        border border-gray-100
        ${checked ? "bg-green-100 border border-green-300 text-gray-700" : "bg-gray-100 text-gray-700"}`}
      >
        {text}
      </label>
    </div>
  );
};

export default RadioButton;
