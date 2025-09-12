import { ChevronRight } from "lucide-react";

interface MyPageItemProps {
  text: string;
  onClick: () => void;
  isRed?: boolean;
}

const MyPageItem = ({ text, onClick, isRed }: MyPageItemProps) => {
  return (
    <div
      className={`flex w-full justify-between cursor-pointer py-[20.5px]`}
      onClick={onClick}
    >
      <p
        className={`${isRed ? "text-red" : "text-gray-600"} font-body02-semibold-14`}
      >
        {text}
      </p>
      <ChevronRight size={24} className={`text-gray-500`} />
    </div>
  );
};

export default MyPageItem;
