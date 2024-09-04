import { defineStore } from "pinia";

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
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
});

interface UserInfo {
  id: string;
  name: string;
  email: string;
}
