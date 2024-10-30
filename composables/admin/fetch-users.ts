import {
  keepPreviousData,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/vue-query";
import { apiFetch } from "~/lib/fetch";

type UseFetchUsersOptions = Omit<UseQueryOptions, "queryKey" | "queryFn">;
type QueryParams = Record<string, any>;

const fetchUsers = async (query?: QueryParams) => {
  const response = await apiFetch<any>(`/users`, {
    query,
    onResponseError({ response }) {
      throw new Error(response._data.message);
    },
  });

  return response.data;
};

export function useFetchUsers<T>(
  options: UseFetchUsersOptions,
  queryParams: QueryParams
) {
  console.log(queryParams);
  return useQuery<T>({
    queryKey: ["users", queryParams],
    queryFn: () => fetchUsers(queryParams),
    placeholderData: keepPreviousData,
    ...options,
  });
}
