import type { CategoryResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import { useMutation } from "@tanstack/react-query";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";

interface RecordResponse {
  id: number;
  title: string;
  content: string;
  category: CategoryResponse;
  createdAt: string;
  hasQuiz: boolean;
}

const putRecord = async (
  recordId: number,
  categoryId: number,
  title: string,
  content: string
): Promise<RecordResponse> => {
  try {
    const response = await instance.put<ApiResponse<RecordResponse>>(
      END_POINT.PUT_RECORD(recordId),
      {
        categoryId: categoryId,
        title: title,
        content: content,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error updating record:", error);
    throw error;
  }
};

export const usePutRecord = (
  recordId: number,
  categoryId: number,
  title: string,
  content: string
) => {
  return useMutation({
    mutationFn: () => putRecord(recordId, categoryId, title, content),
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
