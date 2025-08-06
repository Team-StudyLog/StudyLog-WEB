import type { CategoryResponse } from "../../types/apis/record";
import type { QuizResponse } from "../../types/apis/quiz";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";

interface FetchQuizListResponse {
  categories: CategoryResponse[];
  quizzes: QuizResponse[];
  hasNext: boolean;
  lastId: number;
}

const fetchQuizList = async (
  query?: string,
  date?: string,
  categoryId?: number,
  lastId?: number
): Promise<FetchQuizListResponse> => {
  const params: Record<string, string | number> = {
    size: 10,
  };

  if (query) params.query = query;
  if (date) params.date = date;
  if (categoryId !== undefined) params.categoryId = categoryId;
  if (lastId !== undefined) params.lastId = lastId;
  const response = await instance.get<ApiResponse<FetchQuizListResponse>>(
    END_POINT.FETCH_QUIZ_LIST,
    { params }
  );
  if (!response.data) {
    return {
      categories: [],
      quizzes: [],
      hasNext: false,
      lastId: 0,
    };
  }
  return response.data.data;
};

export const useFetchQuizList = (
  query?: string,
  date?: string,
  categoryId?: number
) => {
  return useInfiniteQuery<FetchQuizListResponse, Error>({
    queryKey: [queryKey.QUIZZES, { query, date, categoryId }],
    queryFn: ({ pageParam }) => {
      return fetchQuizList(
        query,
        date,
        categoryId,
        pageParam as number | undefined
      );
    },
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.lastId : undefined,
    initialPageParam: undefined,
    refetchOnWindowFocus: false,
  });
};
