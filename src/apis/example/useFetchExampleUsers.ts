import { instance } from "../instance.ts";
import type {
  ExampleUser,
  ExampleUserResponse,
} from "../../types/apis/ExampleUser.ts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";

const fetchExampleUsers = async (): Promise<ExampleUser[]> => {
  try {
    const response = await instance.get<ExampleUserResponse<ExampleUser>>(
      `/api/users`,
      {
        params: { page: 2 },
      }
    );
    if (!response.data.data) return [];
    return response.data.data;
  } catch (error) {
    console.error("Error fetching example users:", error);
    return [];
  }
};

export const useFetchExampleUsers = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.EXAMPLE_USERS],
    queryFn: fetchExampleUsers,
  });
};
