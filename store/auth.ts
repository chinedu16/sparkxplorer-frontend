// store/auth.ts

import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => ({}),
  actions: {
    async registerUser(payload: any) {
      try {
        const { data, error } = await useApiPost("/auth/signup", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async login(payload: any) {
      try {
        const { data, error } = await useApiPost("/auth/login", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async forgetPassword(payload: any) {
      try {
        const { data, error } = await useApiPost("/auth/forgot-password", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getGoogleAuthUrl() {
      try {
        const { data, error } = await useApiGet("/auth/google");
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getLoginGoogleAuthUrl() {
      try {
        const { data, error } = await useApiGet("/auth/login-google");
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getGoogleToken(params: {code: string}) {
      try {
        const { data, error } = await useApiPost(`/auth/google-callback?code=${params.code}`, {});
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
