import { defineStore } from "pinia";

export const useSparkStore = defineStore({
  id: "spark-store",
  state: () => ({
    sso_url: {} as any,
  }),
  actions: {
    async getSingleSignOnUrl() {
      try {
        const { data, error } = await useApiGet(
          `/auth/sso/service-provider-urls`
        );

        if (data && !error) {
          this.sso_url = data.data;
        }

        return { data, error };
      } catch (error) {
        return { error };
      }
    },
  },
  getters: {},
});
