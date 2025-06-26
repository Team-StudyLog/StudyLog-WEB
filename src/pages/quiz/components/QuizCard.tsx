import CardFace from "./CardFace.tsx";

interface QuizCardProps {
  category: string;
  color: string;
  question: string;
  answer: string;
  flipped: boolean;
  onClick: () => void;
}

const QuizCard = ({
  category,
  color,
  question,
  answer,
  flipped,
  onClick,
}: QuizCardProps) => {
  return (
    <div className="w-full h-[400px] perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <CardFace
          category={category}
          color={color}
          label="Q."
          content={question}
          onClick={onClick}
        />
        <CardFace
          category={category}
          color={color}
          label="A."
          content={answer}
          onClick={onClick}
          flipped
        />
      </div>
    </div>
  );
};

export default QuizCard;
