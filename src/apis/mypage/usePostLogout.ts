import { instance } from "../instance.ts";
import { useMutation } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { useModalActions } from "../../hooks/useModal.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

const postLogout = async (): Promise<void> => {
  await instance.post(END_POINT.POST_LOGOUT);
};

export const usePostLogout = () => {
  const { closeModal } = useModalActions();
  const { goHomePage } = useEasyNavigate();

  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      closeModal();
      alert("로그아웃 되었습니다.");
      goHomePage();
      localStorage.clear();
    },
  });
};
