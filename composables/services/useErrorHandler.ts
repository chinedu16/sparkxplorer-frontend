// composables/useErrorHandler.ts
import { ElNotification } from "element-plus";

export function useErrorHandler() {
  const handleError = (error: any) => {
    const message =
      error.response?.data?.message || error || "An unexpected error occurred";
    const statusCode = error.response?.status || "Error";

    ElNotification({
      title: statusCode.toString(),
      message: message,
      type: "error",
    });

    console.error("API Error:", error);
  };

  const handleSuccess = (message: string) => {
    ElNotification({
      title: "Success",
      message,
      type: "success",
    });
  };

  return {
    handleError,
    handleSuccess,
  };
}
