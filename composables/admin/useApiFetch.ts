import type { UseFetchOptions } from "#app";
import {
  createFetch,
  useLocalStorage,
  // type UseFetchOptions,
} from "@vueuse/core";
import { defu } from "defu";

const BASEURL = "https://api.sparkbridges.com/xplorer/api/v1";

export function useApiFetch<T>(
  url: MaybeRefOrGetter<string>,
  options: UseFetchOptions<T> = {}
) {
  const accessToken = useLocalStorage<string>("TOKEN", null, {});

  const defaults: UseFetchOptions<T> = {
    baseURL: BASEURL,
    key: toValue(url),
    headers: accessToken.value
      ? {
          Authorization: `Bearer ${accessToken.value}`,
          "Content-Type": "application/json",
        }
      : {},
    server: false,
  };

  const params = defu(options, defaults);
  return useFetch(url, params);
}

// async function refreshToken() {
//   const storage = useStorage<string>();
//   const refreshToken = await storage.getItem("sparkx-refreshToken");

//   if (!refreshToken) return;

//   const { data, status } = await useFetch<{ access: string }>(
//     `${BASEURL}/token/refresh/`,
//     {
//       method: "POST",
//       body: { refresh: refreshToken },
//     }
//   );

//   if (status.value === "success") {
//     return data.value?.access;
//   } else {
//     throw new Error("Token refresh failed");
//   }
// }
