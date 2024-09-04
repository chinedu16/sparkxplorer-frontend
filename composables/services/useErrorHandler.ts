// composables/useErrorHandler.ts
import { ElNotification } from "element-plus";

export function useErrorHandler() {
  const handleError = (error: any) => {
    const message =
      error.response?.data?.message || "An unexpected error occurred";
    const statusCode = error.response?.status || "Error";

    ElNotification({
      title: statusCode.toString(),
      message,
      type: "error",
    });

    console.error("API Error:", error);
  };

  return {
    handleError,
  };
}
