import { defineStore } from "pinia";

const { handleError } = useErrorHandler();

export const usePerformanceStore = defineStore("performance-store", {
  state: () => ({
    rewardData: [] as any,
    performersData: [] as any,
    subjectData: [] as any,
    total: 0,
  }),
  actions: {
    async getPerformanceReward() {
      try {
        const { data, error } = await useApiGet(
          `/performance-tokens/performance-rewards`
        );
        if (data && !error) {
          this.rewardData = data.data;
        }
        return { data, error };
      } catch (error) {
        return { error };
      }
    },

    async getPerformanceGrade() {
      try {
        const { data, error } = await useApiGet(
          `/performance-tokens/performance-grades`
        );
        if (data && !error) {
          this.performersData = data.data;
        }
        return { data, error };
      } catch (error) {
        return { error };
      }
    },

    async getAllSubjects() {
      try {
        const { data, error } = await useApiGet(`scholars/subjects`);
        if (data && !error) {
          this.subjectData = data.data;
        }
        return { data, error };
      } catch (error) {
        return { error };
      }
    },

    async createPerformanceToken(payload: any) {
      try {
        const { data, error } = await useApiPost(`performance-tokens`, payload);
        return { data, error };
      } catch (error) {
        handleError(error);
      }
    },
  },
  getters: {
    getRewardsData: (state) => state.rewardData,
    getPerformersData: (state) => state.performersData,
    getSubjectsData: (state) => state.subjectData,
  },
});
