import { defineStore } from "pinia";

const { handleError } = useErrorHandler();

export const useScholarStore = defineStore("scholar-store", {
  state: () => ({
    scholars: [] as ScholarInfo | any,
    oneScholar: {} as any,
    total: 0,
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
    async deactivateScholar(id: any) {
      try {
        const { data, error } = await useApiPut(
          `/scholars/${id}/deactivate`,
          {}
        );
        return { data, error };
      } catch (error) {
        handleError(error);
      }
    },
    async getSingleScholar(id: number) {
      try {
        const { data, error } = await useApiGet(`/scholars/${id}`);
        if (data && !error) {
          this.oneScholar = data.data;
        }
        return { data, error };
      } catch (error) {
        return { error };
      }
    },

    async getAllScholar(payload: any) {
      try {
        const { page, per_page } = payload;
        const { data, error } = await useApiGet(
          `/scholars?page=${page}&per_page=${per_page}`
        );
        if (data && !error) {
          this.scholars = data.data.results;
          this.total = data.data.total;
        }
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
    getScholars: (state) => state.scholars,
    getOneScholar: (state) => state.oneScholar,
    getTotal: (state) => state.total,
    getGrades: (state) => state.grades,
  },
});

interface GradeInfo {
  id: number;
  name: string;
}

interface ScholarInfo {
  name: string;
}
