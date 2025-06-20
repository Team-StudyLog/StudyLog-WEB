interface FloatingActionButtonProps {
  onClick: () => void;
  text: string;
}

const FloatingActionButton = ({ onClick, text }: FloatingActionButtonProps) => {
  return (
    <button
      style={{ backgroundImage: "var(--color-green-400)" }}
      onClick={onClick}
      className="fixed flex justify-center text-white font-head03-bold-18
      rounded-[30px] py-[21.5px] px-[23px] cursor-pointer"
    >
      {text}
    </button>
  );
};

export default FloatingActionButton;
