import { ChevronLeft } from "lucide-react";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

interface TextHeaderProps {
  text?: string;
}

const TextHeader = ({ text = "" }: TextHeaderProps) => {
  const { goBack } = useEasyNavigate();
  return (
    <header
      className={`flex w-full bg-gray-100 p-5 items-center text-gray-700`}
    >
      <ChevronLeft size={28} onClick={goBack} />
      <p className={`flex flex-1 justify-center font-head05-semibold-20`}>
        {text}
      </p>
    </header>
  );
};

export default TextHeader;
