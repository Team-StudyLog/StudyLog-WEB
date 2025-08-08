import { useEffect, useState } from "react";
import TextHeader from "../../../components/Header/TextHeader.tsx";
import CategoryChip from "../../../components/Chips/CategoryChip.tsx";
import ButtonWithArrow from "../../../components/Button/ButtonWithArrow.tsx";
import BottomSheet from "../../../components/BottomSheet/BottomSheet.tsx";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import QuizGenerateContent from "./QuizGenerateContent.tsx";
import type { BottomSheetState } from "../../../types/types.ts";
import { useModalActions, useModalInfo } from "../../../hooks/useModal.ts";
import Modal from "../../../components/Modal/Modal.tsx";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import RecordQuizItem from "./RecordQuizItem.tsx";
import { useParams } from "react-router-dom";
import { useFetchRecordDetail } from "../../../apis/record/useFetchRecordDetail.ts";

const RecordDetailPage = () => {
  const recordId = Number(useParams<{ recordId: string }>().recordId);
  const { data } = useFetchRecordDetail(recordId);
  const isQuizGenerated = data?.quizzes && data?.quizzes.length > 0;
  const [bottomSheetState, setBottomSheetState] =
    useState<BottomSheetState>("closed");
  const [quizLevel, setQuizLevel] = useState<string | undefined>();
  const [quizCount, setQuizCount] = useState<number | undefined>();
  const [value, setValue] = useState<string>("");

  const { isOpen, content } = useModalInfo();
  const { openModal, closeModal } = useModalActions();

  const { goBack, goRecordEditPage } = useEasyNavigate();

  const handleDelete = () => {
    if (!content) return;
    alert("기록이 삭제되었습니다.");
    closeModal();
    goBack();
  };

  const isButtonDisabled = !quizLevel || !quizCount;

  useEffect(() => {
    if (bottomSheetState === "closed") {
      setQuizLevel(undefined);
      setQuizCount(undefined);
      setValue("");
    }
  }, [bottomSheetState]);

  return (
    <div className={`flex flex-col`}>
      <TextHeader />
      <section className={`flex flex-col px-[26px] py-[20px]`}>
        <CategoryChip category={"미적분"} color={"#FF6B6B"} />
        <div className={`flex justify-between items-end mt-[10px]`}>
          <h1 className={`text-gray-700 font-head05-semibold-20`}>
            {data?.record.title}
          </h1>
          <div className={`flex gap-x-[8px] font-body08-regular-12`}>
            <p
              onClick={() => {
                if (data?.record.id) goRecordEditPage(data?.record.id);
              }}
              className={`text-gray-600 ${isQuizGenerated ? "hidden" : ""}`}
            >
              수정
            </p>
            <p
              onClick={() => openModal({ name: "delete" })}
              className={`text-red`}
            >
              삭제
            </p>
          </div>
        </div>
        <hr className={`w-full text-gray-200 my-[20px]`} />
        <p className={`font-body07-regular-14 text-gray-700 px-[5px]`}>
          {data?.record.content}
        </p>
        <span className={"text-gray-500 mt-[40px] font-body08-regular-12"}>
          {data?.record.createdAt}
        </span>
        <span
          className={"text-gray-500 mt-[4px] font-body08-regular-12 mb-[24px]"}
        >
          퀴즈 {data?.quizzes.length}개
        </span>
        {isQuizGenerated ? (
          <div className={`flex flex-col`}>
            <hr className={`w-full text-gray-200 mb-[20px]`} />
            <h2 className={`text-gray-700 font-head06-semibold-16 mb-[16px]`}>
              생성된 퀴즈
            </h2>
            {data?.quizzes.map((quiz, index) => (
              <RecordQuizItem key={index} index={index} quiz={quiz} />
            ))}
          </div>
        ) : (
          <ButtonWithArrow
            text={"퀴즈를 풀고 지난 공부를 복습해보세요"}
            className={"font-body03-semibold-12"}
            onClick={() => setBottomSheetState("default")}
          />
        )}
      </section>

      {isOpen && content && (
        <Modal
          title={"삭제"}
          text={"기록 삭제 시 스트릭이 내역이 취소됩니다."}
          onConfirm={handleDelete}
        />
      )}

      <BottomSheet
        animateState={bottomSheetState}
        handleAnimateChange={setBottomSheetState}
      >
        <div className="flex flex-col pb-[20px]">
          <QuizGenerateContent
            quizLevel={quizLevel}
            setQuizLevel={setQuizLevel}
            quizCount={quizCount}
            setQuizCount={setQuizCount}
            value={value}
            setValue={setValue}
          />
          <BottomButton
            text={"퀴즈 생성하기"}
            onClick={() => {
              setBottomSheetState("closed");
              console.log(quizLevel, quizCount);
            }}
            disabled={isButtonDisabled}
          />
        </div>
      </BottomSheet>
    </div>
  );
};

export default RecordDetailPage;
