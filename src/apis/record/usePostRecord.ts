import type { RecordResponse, StreakResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import { toast } from "react-toastify";

interface PostRecordResponse {
  record: RecordResponse;
  streak: StreakResponse;
}

const postRecord = async (
  categoryId: number,
  title: string,
  content: string
): Promise<PostRecordResponse> => {
  try {
    const response = await instance.post<ApiResponse<PostRecordResponse>>(
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

export const usePostRecord = () => {
  const { goBack } = useEasyNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      categoryId,
      title,
      content,
    }: {
      categoryId: number;
      title: string;
      content: string;
    }) => postRecord(categoryId, title, content),
    onSuccess: (data) => {
      void queryClient.invalidateQueries({
        queryKey: [queryKey.RECORDS],
        refetchType: "all",
      });
      void queryClient.invalidateQueries({
        queryKey: [queryKey.RECORD, data.record.id],
      });
      goBack();
    },
    onError: () => {
      toast.error("기록 생성에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
