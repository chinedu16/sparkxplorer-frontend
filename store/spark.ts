// store/auth.ts
import { defineStore } from "pinia";

export const useSparkStore = defineStore({
  id: "spark-store",
  state: () => ({}),
  actions: {
	
    async requestProjectDocs(projectId: string) {
      try {
        const { data } = await useApiGet(`/projects/request/${projectId}`, {});
        return { data };
      } catch (error) {}
    },

    async createSparkScholar(payload: any) {
      try {
        const { data, error } = await useApiPost("/spark/scholar", payload);
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
