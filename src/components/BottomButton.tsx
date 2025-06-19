interface BottomButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const BottomButton = ({
  text,
  onClick = () => {},
  disabled = false,
}: BottomButtonProps) => {
  return (
    <button
      style={
        !disabled ? { backgroundImage: "var(--color-green-400)" } : undefined
      }
      className={`flex w-full justify-center items-center text-white font-head02-bold-20 
      py-[18px] rounded-[10px] cursor-pointer ${disabled ? "bg-gray-300" : ""}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BottomButton;
