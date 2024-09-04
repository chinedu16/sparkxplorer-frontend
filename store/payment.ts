import { defineStore } from "pinia";

const { handleError } = useErrorHandler();

export const usePaymentStore = defineStore("payment-store", {
  state: () => ({
    paymentPlan: [],
    grades: null as GradeInfo | null,
  }),
  actions: {
    async getPlanPayment() {
      try {
        const { data, error } = await useApiGet("/auth/pricing-plans");
        if (data && !error) {
            this.paymentPlan = data.data;
          }
        return { data, error };
      } catch (error) {
        handleError(error);
      }
    },

    async getPaymentMethod(payload: any) {
      try {
        const { data, error } = await useApiPost("/payments/generate-checkout-url", payload);
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
