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
        const { data, error } = await useApiPost("/auth/verify-token", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    
  },
  getters: {
    // getterAllMyProjects: (state) => state.myProject,
  },
});
