import { instance } from "../instance.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import { useModalActions } from "../../hooks/useModal.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

const deleteRecord = async (recordId: number): Promise<null> => {
  try {
    const response = await instance.delete<ApiResponse<null>>(
      END_POINT.DELETE_RECORD(recordId)
    );
    return response.data.data;
  } catch (error) {
    console.error("Error deleting record:", error);
    throw error;
  }
};

export const useDeleteRecord = (recordId: number) => {
  const { closeModal } = useModalActions();
  const { goBack } = useEasyNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteRecord(recordId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [queryKey.RECORDS],
        refetchType: "all",
      });
      queryClient.removeQueries({
        queryKey: [queryKey.RECORD, recordId],
      });
      await queryClient.refetchQueries({
        queryKey: [queryKey.RECORDS],
      });
      closeModal();
      goBack();
    },
  });
};
