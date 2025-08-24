import { instance } from "../instance.ts";
import { END_POINT } from "../../constants/api.ts";
import { useMutation } from "@tanstack/react-query";
import { useModalActions } from "../../hooks/useModal.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

const deleteUser = async (): Promise<void> => {
  await instance.delete(END_POINT.DELETE_USER);
};

export const useDeleteUser = () => {
  const { closeModal } = useModalActions();
  const { goHomePage } = useEasyNavigate();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      closeModal();
      alert("회원탈퇴 되었습니다.");
      goHomePage();
      localStorage.clear();
    },
  });
};
