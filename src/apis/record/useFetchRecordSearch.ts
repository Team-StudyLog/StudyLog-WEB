import type { RecordListResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";

interface RecordSearchResponse {
  records: RecordListResponse;
}

const fetchRecordSearch = async (
  query: string
): Promise<RecordSearchResponse> => {
  try {
    const response = await instance.get<ApiResponse<RecordSearchResponse>>(
      END_POINT.FETCH_RECORD_SEARCH,
      { params: { query: query } }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching record search:", error);
    throw error;
  }
};

export const useFetchRecordSearch = (query: string) => {
  return useQuery({
    queryKey: [queryKey.RECORDS, query],
    queryFn: () => fetchRecordSearch(query),
  });
};
