import { defineStore } from "pinia";

const { handleError } = useErrorHandler();

export const usePerformanceStore = defineStore("performance-store", {
  state: () => ({
    performanceToken: [] as any,
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

    async getAllPerformanceToken(payload: any) {
      try {
        const { page, per_page } = payload;
        const { data, error } = await useApiGet(
          `/performance-tokens?page=${page}&per_page=${per_page}`
        );
        if (data && !error) {
          this.performanceToken = data.data.results;
          this.total = data.data.total;
        }
        return { data, error };
      } catch (error) {
        handleError(error);
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
        const { data, error } = await useApiGet(`performance-tokens/subjects`);
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

    async deletePerformanceToken(id: string) {
      try {
        const response = await useApiDelete(`performance-tokens/${id}` );
        return response;
      } catch (error) {
        handleError(error);
      }
    },

    async fufilPerformanceToken(id: string, payload: any) {
      try {
        const response = await useApiPut(`performance-tokens/${id}/fulfil`, payload );
        return response;
      } catch (error) {
        handleError(error);
      }
    },
  },
  getters: {
    getRewardsData: (state) => state.rewardData,
    getPerformersData: (state) => state.performersData,
    getSubjectsData: (state) => state.subjectData,
    getPerformanceToken: (state) => state.performanceToken,
    getTotal: (state) => state.total,
  },
});
