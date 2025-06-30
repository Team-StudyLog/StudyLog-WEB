import IcRightArrow from "../../../assets/ic-right-arrow.svg";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import type { RecordQuizT } from "../../../data/mockRecordQuizzes.ts";

interface RecordQuizItemProps {
  index: number;
  quiz: RecordQuizT;
}

const RecordQuizItem = ({ index, quiz }: RecordQuizItemProps) => {
  const level =
    quiz.level === "easy" ? "하" : quiz.level === "medium" ? "중" : "상";

  const { goQuizDetailPage } = useEasyNavigate();

  return (
    <div
      onClick={() => goQuizDetailPage(quiz.id)}
      className={`flex justify-between ps-[24px] py-[21px] pe-[8px] bg-white
    border border-gray-200 rounded-[10px] mb-[13px] gap-x-[16px]`}
    >
      <div className={`flex flex-col gap-y-[8px]`}>
        <p className={`text-green-300 font-body03-semibold-12`}>
          No.{index + 1}
        </p>
        <div className={`flex gap-x-[8px] items-center`}>
          <p className={`font-body02-semibold-14 text-gray-700`}>
            {quiz.title}
          </p>
          <p className={`text-gray-600 font-body09-medium-10 text-nowrap`}>
            난이도 {level}
          </p>
        </div>
      </div>
      <img src={IcRightArrow} alt="화살표" />
    </div>
  );
};

export default RecordQuizItem;
