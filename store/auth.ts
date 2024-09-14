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
    async resetPassword(payload: any) {
      try {
        const { data, error } = await useApiPut("/auth/reset-password", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getGoogleAuthUrl(mode: string) {
      try {
        const { data, error } = await useApiGet(`/auth/google/generate-auth-url?mode=${mode}`);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getTwoFaCode() {
      try {
        const { data, error } = await useApiPost(`/auth/verify-account/twofa-code`, {});
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async changePasswordTwoFaCode() {
      try {
        const { data, error } = await useApiPost(`/auth/change-password/twofa-code`, {});
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async changePassword(payload: any) {
      try {
        const { data, error } = await useApiPost(`/auth/change-password`, payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async verifyAccount(payload: any) {
      try {
        const { data, error } = await useApiPut("/auth/verify-account", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getGoogleToken(params: {code: string, mode: string}) {
      try {
        const { data, error } = await useApiPost(`/auth/google/callback?code=${params.code}&mode=${params.mode}`, {});
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
