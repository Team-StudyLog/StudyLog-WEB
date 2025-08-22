import type { QuizDetailResponse } from "../../types/apis/quiz";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";
import { toast } from "react-toastify";

const postQuiz = async (
  recordId: number,
  level: "EASY" | "MEDIUM" | "HARD",
  quizCount: number,
  requirement: string
): Promise<QuizDetailResponse[]> => {
  const response = await instance.post<ApiResponse<QuizDetailResponse[]>>(
    END_POINT.POST_QUIZ(recordId),
    {
      level: level,
      quizCount: quizCount,
      requirement: requirement,
    }
  );
  if (!response.data.data) return [];
  return response.data.data;
};

export const usePostQuiz = (recordId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      level,
      quizCount,
      requirement,
    }: {
      level: "EASY" | "MEDIUM" | "HARD";
      quizCount: number;
      requirement: string;
    }) => postQuiz(recordId, level, quizCount, requirement),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [queryKey.RECORDS],
      });
      void queryClient.invalidateQueries({
        queryKey: [queryKey.RECORD, recordId],
      });
      void queryClient.invalidateQueries({
        queryKey: [queryKey.QUIZZES],
        refetchType: "all",
      });
    },
    onError: () => {
      toast.error("퀴즈 생성에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
