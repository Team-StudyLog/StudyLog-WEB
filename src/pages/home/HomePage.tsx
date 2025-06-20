import Header from "../../components/Header/Header.tsx";
import { useModalActions, useModalInfo } from "../../hooks/useModal.ts";
import Modal from "../../components/Modal/Modal.tsx";
import { useState } from "react";
import type { BottomSheetState } from "../../types/types.ts";
import BottomSheet from "../../components/BottomSheet/BottomSheet.tsx";
import BottomButton from "../../components/Button/BottomButton.tsx";

const HomePage = () => {
  const { isOpen } = useModalInfo();
  const { openModal } = useModalActions();

  const [bottomSheetState, setBottomSheetState] =
    useState<BottomSheetState>("closed");
  return (
    <>
      <div className={`flex flex-col`}>
        <Header />
        <button onClick={openModal} className={`font-body01-bold-14`}>
          모달 열기
        </button>
        <button
          className={`font-body01-bold-14`}
          onClick={() => setBottomSheetState("default")}
        >
          바텀시트 열기
        </button>

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
