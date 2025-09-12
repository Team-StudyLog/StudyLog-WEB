import TextHeader from "../../components/Header/TextHeader.tsx";
import DateChip from "../../components/Chips/DateChip.tsx";
import BottomButton from "../../components/Button/BottomButton.tsx";
import ButtonWithArrow from "../../components/Button/ButtonWithArrow.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import QuizCard from "./components/QuizCard.tsx";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchQuizDetail } from "../../apis/quiz/useFetchQuizDetail.ts";
import { parseTypeToString } from "../../utils/parse.ts";

const QuizDetailPage = () => {
  const { goRecordDetailPage } = useEasyNavigate();
  const [flipped, setFlipped] = useState(false);
  const quizId = Number(useParams<{ quizId: string }>().quizId);
  const { data } = useFetchQuizDetail(quizId);

  if (data) {
    return (
      <div className={`flex flex-col min-h-screen`}>
        <TextHeader />
        <section className={`flex flex-col grow px-[26px] pt-[6px]`}>
          <DateChip date={data?.createdAt} />
          <h2 className={`mt-[9px] font-head02-bold-20 text-gray-700`}>
            퀴즈로 복습해보세요
          </h2>
          <section className={`flex flex-col items-center mb-[58px]`}>
            <h3
              className={`mt-[21px] mb-[14px] text-gray-600 font-head05-semibold-20`}
            >
              {parseTypeToString(data?.type || "OX")} 퀴즈
            </h3>
            <div className={`px-[20px] w-full`}>
              <QuizCard
                category={data?.category.name}
                color={data?.category.color}
                question={data?.question}
                answer={data?.answer}
                flipped={flipped}
                onClick={() => setFlipped(!flipped)}
              />
            </div>
          </section>
          <ButtonWithArrow
            text={"기록 보러가기"}
            className={"font-head06-semibold-16"}
            onClick={() => goRecordDetailPage(data?.recordId)}
          />
        </section>
        <BottomButton
          text={`${flipped ? "문제로 돌아가기" : "정답 확인하기"}`}
          onClick={() => setFlipped(!flipped)}
        />
      </div>
    );
  }
};

export default QuizDetailPage;
