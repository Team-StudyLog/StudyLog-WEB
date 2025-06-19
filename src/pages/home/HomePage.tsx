import Header from "../../components/Header/Header.tsx";
import { useModalActions, useModalInfo } from "../../hooks/useModal.ts";
import Modal from "../../components/Modal/Modal.tsx";

const HomePage = () => {
  const { isOpen } = useModalInfo();
  const { openModal } = useModalActions();
  return (
    <>
      <div className={`flex flex-col`}>
        <Header />
        <button onClick={openModal} className={`font-body01-bold-14`}>
          모달 열기
        </button>
        {isOpen && (
          <Modal
            title={"알림"}
            text={"채영님을 팔로우하시겠습니까"}
            onConfirm={() => {}}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
