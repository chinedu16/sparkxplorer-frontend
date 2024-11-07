// store/auth.ts
import { defineStore } from "pinia";
interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
}
export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => ({
    ssoUrls: null as { [key: string]: string } | null,
  }),
  getters: {
    getSSOUrls: (state) => state.ssoUrls,
  },
  actions: {
    async registerUser(
      payload: any
    ): Promise<{ data: any | null; error: ApiError | null }> {
      try {
        const { data, error } = await useApiPost("/auth/signup", payload);
        if (error) {
          return { data: null, error };
        }
        return { data, error: null };
      } catch (error) {
        return {
          data: null,
          error: { message: "An unexpected error occurred." },
        };
      }
    },
    async login(
      payload: any
    ): Promise<{ data: any | null; error: ApiError | null }> {
      try {
        const { data, error } = await useApiPost("/auth/login", payload);

        if (error) {
          return { data: null, error };
        }

        return { data, error: null };
      } catch (error) {
        return {
          data: null,
          error: { message: "An unexpected error occurred." },
        };
      }
    },

    async fetchSSOUrls() {
      try {
        const { data, error } = await useApiGet(
          "/auth/sso/service-provider-urls"
        );

        this.ssoUrls = data.data;
        return { data: data.data, error };
      } catch (error) {
        return { error };
      }
    },
    async forgetPassword(payload: any) {
      try {
        const { data, error } = await useApiPost(
          "/auth/forgot-password",
          payload
        );
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async resetPassword(payload: any) {
      try {
        const { data, error } = await useApiPut(
          "/auth/reset-password",
          payload
        );
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getGoogleAuthUrl(mode: string) {
      try {
        const { data, error } = await useApiGet(
          `/auth/google/generate-auth-url?mode=${mode}`
        );
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getTwoFaCode() {
      try {
        const { data, error } = await useApiPost(
          `/auth/verify-account/twofa-code`,
          {}
        );
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async logout() {
      try {
        const { data, error } = await useApiPost(`/auth/logout`, {});
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async changePasswordTwoFaCode() {
      try {
        const { data, error } = await useApiPost(
          `/auth/change-password/twofa-code`,
          {}
        );
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async changePassword(payload: any) {
      try {
        const { data, error } = await useApiPost(
          `/auth/change-password`,
          payload
        );
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async verifyAccount(payload: any) {
      try {
        const { data, error } = await useApiPut(
          "/auth/verify-account",
          payload
        );
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getGoogleToken(params: { code: string; mode: string }) {
      try {
        const { data, error } = await useApiPost(
          `/auth/google/callback?code=${params.code}&mode=${params.mode}`,
          {}
        );
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getSSOAuthUrl(payload: any) {
      try {
        const { data, error } = await useApiPost(`/auth/sso/login`, payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
  },
});
