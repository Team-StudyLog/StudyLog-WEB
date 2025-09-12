import type { QuizDetailResponse } from "../../types/apis/quiz";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";

const fetchQuizDetail = async (quizId: number): Promise<QuizDetailResponse> => {
  try {
    const response = await instance.get<ApiResponse<QuizDetailResponse>>(
      END_POINT.FETCH_QUIZ_DETAIL(quizId)
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching quiz detail:", error);
    throw error;
  }
};

export const useFetchQuizDetail = (quizId: number) => {
  return useQuery({
    queryKey: [queryKey.QUIZ, quizId],
    queryFn: () => fetchQuizDetail(quizId),
  });
};
