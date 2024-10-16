import { defineStore } from "pinia";
/*import { useApiGet, useApiPost } from "~/api"; // Ensure these are correctly imported from your API utility */

export const useSparkStore = defineStore({
  id: "spark-store",
  state: () => ({
    amountList: [
      { id: 1, amount: 0, name: 'zero' },
      { id: 2, amount: 10, name: "ten" },
      { id: 3, amount: 20, name: "twenty" },
      { id: 4, amount: 50, name: "fifty" },
      { id: 5, amount: 100, name: "hundred" },
      { id: 6, amount: 150, name: "oneFifty" },
      { id: 7, amount: 200, name: "twoHundred" },
      { id: 8, amount: 250, name: "twoFifty" },
      { id: 9, amount: 300, name: "threeHundred" },
      { id: 10, amount: 350, name: "threeFifty" },
      { id: 11, amount: 400, name: "fourHundred" },
      { id: 12, amount: 450, name: "fourFifty" },
      { id: 13, amount: 500, name: "fiveHundred" },
    ],
  }),
  actions: {
    async requestProjectDocs(projectId: string) {
      try {
        const { data } = await useApiGet(`/projects/request/${projectId}`, {});
        return { data };
      } catch (error) {
        console.error("Error requesting project docs:", error);
        return { error };
      }
    },

    async createSparkScholar(payload: any) {
      try {
        const { data, error } = await useApiPost("/spark/scholar", payload);
        if (error) {
          console.error("Error creating Spark Scholar:", error);
        }
        return { data, error };
      } catch (error) {
        console.error("Error creating Spark Scholar:", error);
        return { error };
      }
    },

    async donateToAScholar(payload: any) {
      try {
        const { data, error } = await useApiPost("/spark/donate", payload);
        if (error) {
          console.error("Error donating to a scholar:", error);
        }
        return { data, error };
      } catch (error) {
        console.error("Error donating to a scholar:", error);
        return { error };
      }
    },

    async exportScholarData(params: string) {
      try {
        const urlParams = params === 'parent' ? '/spark/export-parent-numbers' : '/spark/export-child-data'
        const { data, error } = await useApiPost(urlParams, {});
        if (error) {
          console.error("Could not generate file:", error);
        }
        return { data, error };
      } catch (error) {
        console.error("Could not generate file:", error);
        return { error };
      }
    },
  },
  getters: {
    getAllAmountList: (state) => state.amountList,
  },
});
