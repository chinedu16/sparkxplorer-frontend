import axios, { type AxiosRequestConfig } from "axios";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const axiosInstance = axios.create({
  baseURL: "https://51c8-102-89-40-88.ngrok-free.app/api/v1/", // Replace this with your API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("TOKEN");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 400) {
        ElNotification({
          title: "Bad Request",
          message: error.response.data?.message || "Bad Request",
          type: "error",
        });
      } else if (status === 401) {
        ElNotification({
          title: "Unauthorized Action",
          message: error.response.data?.message,
          type: "error",
        });

        if (error.response.data?.message.includes("Invalid token")) {
          navigateTo("/portal");
        }
      } else if (status === 500) {
        ElNotification({
          title: "Server Error",
          message:
            "An unexpected server error occurred. Please try again later.",
          type: "error",
        });
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error during request setup:", error.message);
    }
    return Promise.reject(error);
  }
);

export function useCommonAPI(
  url: string,
  method: RequestMethod,
  body?: Record<string, any>,
  options?: AxiosRequestConfig
) {
  const axiosConfig: AxiosRequestConfig = {
    method,
    url,
    data: body,
    ...options,
  };

  return axiosInstance
    .request(axiosConfig)
    .then((response) => response.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}

export const useApiGet = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const response = await useCommonAPI(url, "GET", undefined, options);
    return { data: response, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const useApiPost = async (
  url: string,
  payload: Record<string, any>,
  options?: AxiosRequestConfig
) => {
  try {
    const response = await useCommonAPI(url, "POST", payload, options);
    return { data: response, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const useApiPut = async (
  url: string,
  payload: Record<string, any>,
  options?: AxiosRequestConfig
) => {
  try {
    const response = await useCommonAPI(url, "PUT", payload, options);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const useApiPatch = async (
  url: string,
  payload: Record<string, any>,
  options?: AxiosRequestConfig
) => {
  try {
    const response = await useCommonAPI(url, "PATCH", payload, options);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const useApiDelete = async (
  url: string,
  payload?: Record<string, any>,
  options?: AxiosRequestConfig
) => {
  try {
    const response = await useCommonAPI(url, "DELETE", payload, options);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
