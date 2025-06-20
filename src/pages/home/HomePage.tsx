import Header from "../../components/Header/Header.tsx";
import { useModalActions, useModalInfo } from "../../hooks/useModal.ts";
import Modal from "../../components/Modal/Modal.tsx";
import { useState } from "react";
import type { BottomSheetState } from "../../types/types.ts";
import BottomSheet from "../../components/BottomSheet/BottomSheet.tsx";
import BottomButton from "../../components/Button/BottomButton.tsx";
import InputLabel from "../../components/Label/InputLabel.tsx";
import TextInput from "../../components/Input/TextInput.tsx";

const HomePage = () => {
  const { isOpen } = useModalInfo();
  const { openModal } = useModalActions();
  const [inputValue, setInputValue] = useState("");
  const [bottomSheetState, setBottomSheetState] =
    useState<BottomSheetState>("closed");
  return (
    <>
      <div className={`flex flex-col gap-4`}>
        <Header />
        <div className={`flex flex-col mt-5 px-[26px] gap-4`}>
          <InputLabel label={"제목을 입력하세요"} htmlFor={"title"} />
          <TextInput
            type={"title"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id={"title"}
            errorText={"20자 내외로 입력해주세요"}
          />
          <div className={`flex justify-center gap-4`}>
            <button onClick={openModal} className={`font-body01-bold-14`}>
              모달 열기
            </button>
            <button
              className={`font-body01-bold-14`}
              onClick={() => setBottomSheetState("default")}
            >
              바텀시트 열기
            </button>
          </div>
        </div>

        {isOpen && (
          <Modal
            title={"알림"}
            text={"채영님을 팔로우하시겠습니까"}
            onConfirm={() => {}}
          />
        )}

        <BottomSheet
          animateState={bottomSheetState}
          handleAnimateChange={setBottomSheetState}
        >
          <div className="p-4">
            <BottomButton
              text={"다음"}
              onClick={() => setBottomSheetState("closed")}
            />
          </div>
        </BottomSheet>
      </div>
    </>
  );
};

export default HomePage;
