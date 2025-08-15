import type { CategoryResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import { useMutation } from "@tanstack/react-query";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

interface PutRecordResponse {
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
): Promise<PutRecordResponse> => {
  try {
    const response = await instance.put<ApiResponse<PutRecordResponse>>(
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

export const usePutRecord = (recordId: number) => {
  const { goBack } = useEasyNavigate();

  return useMutation({
    mutationFn: ({
      categoryId,
      title,
      content,
    }: {
      categoryId: number;
      title: string;
      content: string;
    }) => putRecord(recordId, categoryId, title, content),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [queryKey.RECORDS],
      });
      void queryClient.invalidateQueries({
        queryKey: [queryKey.RECORD, recordId],
      });
      goBack();
    },
  });
};
