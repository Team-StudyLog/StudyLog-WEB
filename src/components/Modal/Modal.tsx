import { useModalActions } from "../../hooks/useModal.ts";
import {
  modalBackdrop,
  modalBackground,
  modalButtonWrapper,
  modalButton,
  modalText,
  modalTitle,
} from "./Modal.styles.ts";

interface ModalProps {
  title: string;
  text: string;
  onConfirm: () => void;
  confirmText?: string;
  dismissText?: string;
}

const Modal = ({
  title,
  text,
  onConfirm,
  confirmText = "확인",
  dismissText = "취소",
}: ModalProps) => {
  const { closeModal } = useModalActions();
  return (
    <div className={modalBackdrop}>
      <div className={modalBackground} onClick={(e) => e.stopPropagation()}>
        <h2 className={modalTitle}>{title}</h2>
        <p className={modalText}>{text}</p>
        <div className={modalButtonWrapper}>
          <button
            onClick={closeModal}
            className={`${modalButton} bg-gray-200 text-gray-600`}
          >
            {dismissText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              closeModal();
            }}
            style={{ backgroundImage: "var(--color-green-400)" }}
            className={`${modalButton} text-white`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
