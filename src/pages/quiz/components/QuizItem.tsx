import type { QuizT } from "../../../data/mockQuizzes.ts";
import CategoryDot from "../../../components/Chips/CategoryDot.tsx";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";

interface QuizItemProps {
  quiz: QuizT;
}

const QuizItem = ({ quiz }: QuizItemProps) => {
  const level =
    quiz.level === "easy" ? "하" : quiz.level === "medium" ? "중" : "상";
  const levelColor =
    quiz.level === "easy"
      ? "text-green-300"
      : quiz.level === "medium"
        ? "text-kakao-yellow"
        : "text-red";

  const { goQuizDetailPage } = useEasyNavigate();

  return (
    <div
      className="flex w-full justify-between items-start gap-x-[10px] bg-white rounded-[10px] px-[18px] py-[20.5px] mb-[10px]"
      onClick={() => {
        goQuizDetailPage(quiz.id);
      }}
    >
      <section className="flex">
        <CategoryDot color={quiz.color} />
        <div className="flex flex-col gap-y-[8px] ml-[8px]">
          <span className="text-gray-700 font-body06-regular-16 max-w-[260px] truncate">
            {quiz.title}
          </span>
          <p className="text-gray-500 font-body10-regular-10">
            {quiz.category}
          </p>
        </div>
      </section>
      <div className="flex-shrink-0 flex font-body10-regular-10 items-start">
        <p className="text-gray-500">난이도&nbsp;</p>
        <p className={levelColor}>{level}</p>
      </div>
    </div>
  );
};

export default QuizItem;
