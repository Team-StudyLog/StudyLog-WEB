import type { RecordResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";

interface FetchRecordListResponse {
  records: RecordResponse[];
  hasMore: boolean;
  nextLastId: number | null;
}

const fetchRecordList = async (
  categoryId?: number,
  date?: string,
  lastId?: number
): Promise<FetchRecordListResponse> => {
  const params: Record<string, string | number> = {
    size: 10,
  };

  if (categoryId !== undefined) params.categoryId = categoryId;
  if (date) params.date = date;
  if (lastId !== undefined) params.lastId = lastId;

  const response = await instance.get<ApiResponse<FetchRecordListResponse>>(
    END_POINT.FETCH_RECORD_LIST,
    { params }
  );
  if (!response.data)
    return {
      records: [],
      hasMore: false,
      nextLastId: 0,
    };
  return response.data.data;
};

export const useFetchRecordList = (categoryId?: number, date?: string) => {
  return useInfiniteQuery<FetchRecordListResponse, Error>({
    queryKey: [queryKey.RECORDS, { categoryId, date }],
    queryFn: ({ pageParam }) => {
      return fetchRecordList(categoryId, date, pageParam as number | undefined);
    },
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextLastId : undefined;
    },
    initialPageParam: undefined,
    refetchOnWindowFocus: true,
  });
};
