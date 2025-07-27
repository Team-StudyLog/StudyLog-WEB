import type {
  RecordListResponse,
  StreakResponse,
} from "../../types/apis/record";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";

interface RecordResponse {
  record: RecordListResponse;
  streak: StreakResponse;
}

const postRecord = async (
  categoryId: number,
  title: string,
  content: string
): Promise<RecordResponse> => {
  try {
    const response = await instance.post<ApiResponse<RecordResponse>>(
      END_POINT.POST_RECORD,
      {
        categoryId: categoryId,
        title: title,
        content: content,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const usePostRecord = (
  categoryId: number,
  title: string,
  content: string
) => {
  return useMutation({
    mutationFn: () => postRecord(categoryId, title, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.RECORDS],
      });
    },
  });
};
