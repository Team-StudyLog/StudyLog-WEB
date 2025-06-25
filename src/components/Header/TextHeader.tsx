import { ChevronLeft } from "lucide-react";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

interface TextHeaderProps {
  text?: string;
  onClick?: () => void;
}

const TextHeader = ({ text = "", onClick }: TextHeaderProps) => {
  const { goBack } = useEasyNavigate();
  return (
    <header
      className={`flex w-full bg-gray-100 p-5 items-center text-gray-700`}
    >
      <ChevronLeft
        size={28}
        onClick={onClick ?? goBack}
        className={`flex-shrink-0`}
      />
      <p className={`flex-1 text-center font-head05-semibold-20`}>{text}</p>
    </header>
  );
};

export default TextHeader;
