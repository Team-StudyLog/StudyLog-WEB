import type { QuizDetailResponse } from "../../types/apis/quiz";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";

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
        queryKey: [queryKey.QUIZZES]
      })
    },
  });
};
