import type { RecordListResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";

interface FilteredRecordListResponse {
  records: RecordListResponse[];
  hasMore: boolean;
  nextLastId: number | null;
}

const fetchFilteredRecordList = async (
  categoryId?: number,
  date?: string,
  lastId?: number | null
): Promise<FilteredRecordListResponse> => {
  try {
    const response = await instance.get<
      ApiResponse<FilteredRecordListResponse>
    >(END_POINT.FETCH_FILTERED_RECORD_LIST, {
      params: { categoryId: categoryId, date: date, lastId: lastId },
    });
    if (!response.data)
      return { records: [], hasMore: false, nextLastId: null };
    return response.data.data;
  } catch (error) {
    console.error("Error fetching filtered record list:", error);
    throw error;
  }
};

export const useFetchFilteredRecordList = (
  categoryId?: number,
  date?: string
) => {
  return useInfiniteQuery<FilteredRecordListResponse, Error>({
    queryKey: [queryKey.RECORDS, { categoryId, date }],
    queryFn: ({ pageParam }) => {
      const lastId = pageParam as number | null;
      return fetchFilteredRecordList(categoryId, date, lastId);
    },
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextLastId : undefined;
    },
    initialPageParam: null,
  });
};
