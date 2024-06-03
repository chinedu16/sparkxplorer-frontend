// store/auth.ts
import { defineStore } from "pinia";

export const useSparkStore = defineStore({
  id: "spark-store",
  state: () => ({
    amountList: [
      {
        id: 1,
        amount: 0,
        name: "Zero",
      },
      {
        id: 2,
        amount: 50,
        name: "Fifty",
      },
      {
        id: 3,
        amount: 100,
        name: "One Hundred",
      },
      {
        id: 4,
        amount: 150,
        name: "One Hundred Fifty",
      },
      {
        id: 5,
        amount: 200,
        name: "Two Hundred",
      },
      {
        id: 6,
        amount: 250,
        name: "Two Hundred Fifty",
      },
      {
        id: 7,
        amount: 300,
        name: "Three Hundred",
      },
      {
        id: 8,
        amount: 350,
        name: "Three Hundred Fifty",
      },
      {
        id: 9,
        amount: 400,
        name: "Four Hundred",
      },
      {
        id: 10,
        amount: 450,
        name: "Four Hundred Fifty",
      },
      {
        id: 11,
        amount: 500,
        name: "Five Hundred",
      },
    ],
  }),
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

    async donateToAScholar(payload: any) {
      try {
        const { data, error } = await useApiPost("/spark/donate", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
  },
  getters: {
    getAllAmountList: (state) => state.amountList,
  },
});
