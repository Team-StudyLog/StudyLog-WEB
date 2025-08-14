import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../utils/queryClient.ts";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import { useModalActions } from "../../hooks/useModal.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

const postFollow = async (code: string): Promise<null> => {
  try {
    const response = await instance.post<ApiResponse<null>>(
      END_POINT.POST_FOLLOW,
      {
        code: code,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error posting follow:", error);
    throw error;
  }
};

export const usePostFollow = () => {
  const { closeModal } = useModalActions();
  const { goBack } = useEasyNavigate();

  return useMutation({
    mutationFn: (code: string) => postFollow(code),
    onSuccess: () => {
      closeModal();
      goBack();
      void queryClient.invalidateQueries({
        queryKey: [queryKey.FRIENDS],
      });
      void queryClient.invalidateQueries({
        queryKey: [queryKey.MY_PAGE],
      });
    },
  });
};
