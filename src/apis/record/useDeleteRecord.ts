import { instance } from "../instance.ts";
import { useMutation } from "@tanstack/react-query";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";

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
  return useMutation({
    mutationFn: () => deleteRecord(recordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.RECORDS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKey.RECORD, recordId],
      });
    },
  });
};
