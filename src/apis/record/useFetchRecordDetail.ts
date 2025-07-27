import type { QuizResponse } from "../../types/apis/quiz";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import type { BaseRecordDetailResponse } from "../../types/apis/record";

interface RecordDetailResponse {
  record: BaseRecordDetailResponse;
  quizzes: QuizResponse[];
}

const fetchRecordDetail = async (
  recordId: number
): Promise<RecordDetailResponse> => {
  try {
    const response = await instance.get<ApiResponse<RecordDetailResponse>>(
      END_POINT.FETCH_RECORD_DETAIL(recordId)
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useFetchRecordDetail = (recordId: number) => {
  return useQuery({
    queryKey: [queryKey.RECORD, recordId],
    queryFn: () => fetchRecordDetail(recordId),
  });
};
