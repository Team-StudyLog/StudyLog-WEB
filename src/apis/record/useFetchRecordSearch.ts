import type { RecordResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";

interface FetchRecordSearchResponse {
  records: RecordResponse;
}

const fetchRecordSearch = async (
  query: string
): Promise<FetchRecordSearchResponse> => {
  try {
    const response = await instance.get<ApiResponse<FetchRecordSearchResponse>>(
      END_POINT.FETCH_RECORD_SEARCH,
      { params: { query: query } }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching record search:", error);
    throw error;
  }
};

export const useFetchRecordSearch = () => {
  return useMutation({
    mutationFn: (query: string) => fetchRecordSearch(query),
  });
};
