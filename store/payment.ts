import { defineStore } from "pinia";

const { handleError } = useErrorHandler();

export const usePaymentStore = defineStore("payment-store", {
  state: () => ({
    paymentPlan: [] as PaymentPlanInfo | any,
    grades: null as GradeInfo | null,
    allSubscription: [] as SubscriptionInfo | any,
    canAddScholar: null as boolean | null,
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
    async getPaymentStripeLink(payload: any) {
      try {
        const { data, error } = await useApiPost("/payments/generate-checkout-url", payload);
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
    async getSubscriptions() {
      try {
        const { data, error } = await useApiGet("/payments/subscriptions");
        if (data && !error) {
            this.allSubscription = data.data;
          }
        return { data, error };
      } catch (error) {
        handleError(error);
      }
    },
    async checkIfCanAddScholars() {
      try {
        const { data, error } = await useApiGet("/payments/can-add-scholar");
        if (data && !error) {
          this.canAddScholar = data.data.can_add_scholar;
        }
        return { data, error };
      } catch (error) {
        return { error };
      }
    },
  },
  getters: {
    getGrades: (state) => state.grades,
    getPaymentPlan: (state) => state.paymentPlan,
    getAllSubscription: (state) => state.allSubscription,
    getCanAddScholar: (state) => state.canAddScholar,
  },
});

interface GradeInfo {
  id: number;
  name: string;
}

interface PaymentPlanInfo {
  duration: string;
  amount: number;
  currency: string;
}

interface SubscriptionInfo {
  
}