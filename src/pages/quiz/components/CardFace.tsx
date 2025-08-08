import CategoryChip from "../../../components/Chips/CategoryChip.tsx";

interface CardFaceProps {
  category: string;
  color: string;
  label: string;
  content: string;
  onClick: () => void;
  flipped?: boolean;
}

const CardFace = ({
  category,
  color,
  label,
  content,
  onClick,
  flipped = false,
}: CardFaceProps) => (
  <div
    className={`absolute w-full h-full backface-hidden bg-white rounded-[20px] p-[14px] ${
      flipped ? "transform rotate-y-180" : ""
    }`}
    onClick={onClick}
  >
    <div className="h-full border border-gray-400 border-dashed rounded-[20px] p-[30px] flex flex-col items-center justify-center relative">
      <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2">
        <CategoryChip category={category} color={color} />
      </div>
      <div className="flex font-head02-bold-20 items-start justify-center">
        <p className="text-green-300">{label}&nbsp;</p>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  </div>
);

export default CardFace;
