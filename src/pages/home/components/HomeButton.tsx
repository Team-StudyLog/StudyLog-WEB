import homeArchive from "../../../assets/home-archive.svg";
import homeQuiz from "../../../assets/home-group.svg";

interface HomeButtonProps {
  type: "archive" | "quiz";
  onClick: () => void;
}

const HomeButton = ({ type, onClick }: HomeButtonProps) => {
  return (
    <div
      className={`flex flex-1 flex-col bg-white rounded-[18px] px-[16px] pt-[27px] pb-[21px] cursor-pointer`}
      onClick={onClick}
    >
      <span className={`text-gray-700 font-head04-bold-16`}>
        {type === "archive" ? "나의 아카이빙" : "퀴즈"}
      </span>
      <span className={`text-gray-500 mt-[8px] font-body03-semibold-12`}>
        {type === "archive" ? "공부 기록 모음" : "AI가 직접 생성하는 퀴즈"}
      </span>
      <img
        className={`mt-[20px]`}
        src={type === "archive" ? homeArchive : homeQuiz}
        alt={type === "archive" ? "나의 아카이빙 버튼" : "퀴즈 버튼"}
      />
    </div>
  );
};

export default HomeButton;
