import { defineStore } from "pinia";

const { handleError } = useErrorHandler();

export const useScholarStore = defineStore("scholar-store", {
  state: () => ({
    scholars: [],
    grades: null as GradeInfo | null,
  }),
  actions: {
    async createScholar(payload: any) {
      try {
        const { data, error } = await useApiPost("/scholars", payload);
        return { data, error };
      } catch (error) {
        handleError(error);
      }
    },

    async getAllGrades() {
      try {
        const { data, error } = await useApiGet("/scholars/grades");
        if (data && !error) {
          this.grades = data.data.results;
        }
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
  },
  getters: {
    getGrades: (state) => state.grades,
  },
});

interface GradeInfo {
  id: number;
  name: string;
}
