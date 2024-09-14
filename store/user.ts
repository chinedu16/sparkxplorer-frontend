import { defineStore } from "pinia";
const { handleError } = useErrorHandler();

export const useUserStore = defineStore({
  id: "user-store",
  state: () => ({
    userInfo: null as UserInfo | null,
  }),
  actions: {
    async getCurrentUser() {
      try {
        const { data, error } = await useApiGet("/users/me");
        if (data && !error) {
          this.userInfo = data.data;
        }
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async updateUser(payload: any) {
      try {
        const { data, error } = await useApiPut(`/users/${payload.id}`, payload);
        return { data, error };
      } catch (error) {
        handleError(error);
      }
    },
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
});

interface UserInfo {
  id: string;
  name: string;
  email: string;
  primary_role: string;
  picture_url: string;
  notification_performance: boolean;
  notification_login: boolean;
  parent: any;
}
