import TextHeader from "../../components/Header/TextHeader.tsx";
import InputLabel from "../../components/Label/InputLabel.tsx";
import TextInput from "../../components/Input/TextInput.tsx";
import { useState } from "react";
import BottomButton from "../../components/Button/BottomButton.tsx";
import { useModalActions, useModalInfo } from "../../hooks/useModal.ts";
import Modal from "../../components/Modal/Modal.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

const FriendAddPage = () => {
  const [friendCode, setFriendCode] = useState<string>("");
  const { isOpen, content } = useModalInfo();
  const { openModal, closeModal } = useModalActions();
  const { goBack } = useEasyNavigate();

  const handleNext = () => {
    if (!content) return;
    closeModal();
    goBack();
  };

  return (
    <div className={`flex flex-col min-h-screen`}>
      <TextHeader text={"친구 추가"} />
      <div className={`flex flex-col flex-grow px-[26px]`}>
        <div className={`flex flex-col mt-[34px]`}>
          <InputLabel label={"코드를 입력하세요"} htmlFor={"friendCode"} />
          <TextInput
            value={friendCode}
            onChange={(e) => setFriendCode(e.target.value)}
            id={"friendCode"}
            placeholder={"친구 코드를 입력해주세요"}
          />
        </div>
      </div>
      <BottomButton
        text={"다음"}
        onClick={() => openModal({ name: "채영" })}
        disabled={!friendCode}
      />
      {isOpen && content && (
        <Modal
          title={"알림"}
          text={`${content.name}님을 팔로우 하시겠습니까?`}
          onConfirm={handleNext}
        />
      )}
    </div>
  );
};

export default FriendAddPage;
