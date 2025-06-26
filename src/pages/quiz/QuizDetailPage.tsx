import TextHeader from "../../components/Header/TextHeader.tsx";
import DateChip from "../../components/Chips/DateChip.tsx";
import BottomButton from "../../components/Button/BottomButton.tsx";
import ButtonWithArrow from "../../components/Button/ButtonWithArrow.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import QuizCard from "./components/QuizCard.tsx";
import { useState } from "react";

const QuizDetailPage = () => {
  const { goRecordPage } = useEasyNavigate();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flex flex-col min-h-screen`}>
      <TextHeader />
      <section className={`flex flex-col grow px-[26px] pt-[6px]`}>
        <DateChip date={"2024.05.04"} />
        <h2 className={`mt-[9px] font-head02-bold-20 text-gray-700`}>
          퀴즈로 복습해보세요
        </h2>
        <section className={`flex flex-col items-center mb-[58px]`}>
          <h3
            className={`mt-[21px] mb-[14px] text-gray-600 font-head05-semibold-20`}
          >
            단답형 퀴즈
          </h3>
          <div className={`px-[20px] w-full`}>
            <QuizCard
              category={"미적분"}
              color={"#FCD44F"}
              question={"cos의 도함수는?"}
              answer={"-sin입니다."}
              flipped={flipped}
              onClick={() => setFlipped(!flipped)}
            />
          </div>
        </section>
        <ButtonWithArrow
          text={"기록 보러가기"}
          className={"font-head06-semibold-16"}
          onClick={goRecordPage}
        />
      </section>
      <BottomButton
        text={`${flipped ? "문제로 돌아가기" : "정답 확인하기"}`}
        onClick={() => setFlipped(!flipped)}
      />
    </div>
  );
};

export default QuizDetailPage;
