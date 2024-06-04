// store/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => ({}),
  actions: {

    async registerUser(payload: any) {
      try {
        const { data, error } = await useApiPost("/auth/register", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async verifyToken(payload: any) {
      try {
        const response = await axios.post("https://api.sparkbridges.com/api/v1/auth/verify-email", payload);
        return { data: response.data, error: null };
      } catch (error) {
        return { data: null, error: error.response.data };
      }
    },
  },
  getters: {
    // getterAllMyProjects: (state) => state.myProject,
  },
});
