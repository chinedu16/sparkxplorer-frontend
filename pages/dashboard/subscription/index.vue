<template>
  <div v-loading="loading">
    <div class="flex justify-between mb-6">
      <h2 class="font-extrabold text-gray-two text-3xl">Subscription</h2>
    </div>
    <div class="mb-10">
      <div>
        <h4 class="font-semibold">Scholar Plans</h4>
        <div class="mt-4 grid grid-cols-3 gap-8">
          <div
            v-for="sub in subscriptions"
            class="border rounded-3xl py-4 px-6 shadow-md"
          >
            <div
              class="bg-purple-one mb-6 text-primary rounded-full flex items-center justify-center font-bold text-base h-12 w-12"
            >
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM17.1078 2.375L11 7.97375L4.89219 2.375H17.1078ZM3.125 13.625V3.8075L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L18.875 3.8075V13.625H3.125Z"
                  fill="#4F46E5"
                />
              </svg>
            </div>
            <div class="text-sm flex font-bold justify-between items-center">
              <ul class="space-y-2 text-gray-one">
                <li>1 Scholars</li>
                <li>Billed {{ sub.plans }}</li>
                <li>Next Payment: {{ formatDate(sub.end_date) }}</li>
              </ul>
            </div>
            <div class="mt-3 flex justify-between items-center">
              <h4 class="font-black text-4xl uppercase">
                {{ sub.currency }} {{ sub.amount_paid }}
              </h4>
              <img
                src="../../assets/images/illustrations/avatar-icon-2.png"
                alt=""
              />
            </div>
            <div class="flex w-full mt-6 space-x-3">
              <base-button
                styles="w-full font-bold bg-white text-primary"
                size="large"
                type="primary"
                bgColor="#FFF1F2"
                @click="cancelSubscription(sub.id)"
                textColor="#F43F5E"
                borderColor="#FFF1F2"
              >
                <div class="flex items-center space-x-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7882 12.461C13.9644 12.6371 14.0633 12.876 14.0633 13.1251C14.0633 13.3741 13.9644 13.613 13.7882 13.7891C13.6121 13.9652 13.3733 14.0642 13.1242 14.0642C12.8751 14.0642 12.6362 13.9652 12.4601 13.7891L7.49997 8.82741L2.53825 13.7876C2.36213 13.9637 2.12326 14.0626 1.87418 14.0626C1.62511 14.0626 1.38624 13.9637 1.21012 13.7876C1.034 13.6114 0.935059 13.3726 0.935059 13.1235C0.935059 12.8744 1.034 12.6356 1.21012 12.4594L6.17184 7.49928L1.21168 2.53756C1.03556 2.36144 0.936621 2.12257 0.936621 1.8735C0.936621 1.62443 1.03556 1.38556 1.21168 1.20944C1.3878 1.03332 1.62668 0.934375 1.87575 0.934375C2.12482 0.934375 2.36369 1.03332 2.53981 1.20944L7.49997 6.17116L12.4617 1.20866C12.6378 1.03254 12.8767 0.933594 13.1257 0.933594C13.3748 0.933594 13.6137 1.03254 13.7898 1.20866C13.9659 1.38478 14.0649 1.62365 14.0649 1.87272C14.0649 2.12179 13.9659 2.36066 13.7898 2.53678L8.82809 7.49928L13.7882 12.461Z"
                      fill="#F43F5E"
                    />
                  </svg>

                  <span>Cancel subscription</span>
                </div>
              </base-button>
              <base-button
                styles="w-full font-bold"
                size="large"
                @click="renewSubscription(sub)"
                type="primary"
              >
                <div class="flex items-center space-x-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3125 2.2508V6.0008C16.3125 6.24944 16.2137 6.4879 16.0379 6.66372C15.8621 6.83953 15.6236 6.9383 15.375 6.9383H11.625C11.3764 6.9383 11.1379 6.83953 10.9621 6.66372C10.7863 6.4879 10.6875 6.24944 10.6875 6.0008C10.6875 5.75216 10.7863 5.51371 10.9621 5.33789C11.1379 5.16208 11.3764 5.0633 11.625 5.0633H13.1094L12.5 4.45393C11.3967 3.34519 9.89849 2.71971 8.33437 2.71487H8.30078C6.75063 2.71147 5.26146 3.31853 4.15547 4.40471C3.97769 4.57855 3.73814 4.67465 3.4895 4.67187C3.24087 4.66908 3.00353 4.56764 2.82969 4.38987C2.65585 4.21209 2.55975 3.97253 2.56253 3.7239C2.56531 3.47527 2.66675 3.23793 2.84453 3.06409C4.30095 1.63397 6.26196 0.834917 8.30313 0.839867H8.34375C10.4029 0.845481 12.3756 1.66855 13.8281 3.12815L14.4375 3.73518V2.2508C14.4375 2.00216 14.5363 1.76371 14.7121 1.58789C14.8879 1.41208 15.1264 1.3133 15.375 1.3133C15.6236 1.3133 15.8621 1.41208 16.0379 1.58789C16.2137 1.76371 16.3125 2.00216 16.3125 2.2508ZM12.8445 12.5969C11.738 13.6836 10.2478 14.2907 8.69688 14.2867H8.66328C7.09916 14.2819 5.60092 13.6564 4.49766 12.5477L3.89062 11.9383H5.375C5.62364 11.9383 5.8621 11.8395 6.03791 11.6637C6.21373 11.4879 6.3125 11.2494 6.3125 11.0008C6.3125 10.7522 6.21373 10.5137 6.03791 10.3379C5.8621 10.1621 5.62364 10.0633 5.375 10.0633H1.625C1.37636 10.0633 1.1379 10.1621 0.962087 10.3379C0.786272 10.5137 0.6875 10.7522 0.6875 11.0008V14.7508C0.6875 14.9994 0.786272 15.2379 0.962087 15.4137C1.1379 15.5895 1.37636 15.6883 1.625 15.6883C1.87364 15.6883 2.1121 15.5895 2.28791 15.4137C2.46373 15.2379 2.5625 14.9994 2.5625 14.7508V13.2664L3.17188 13.8758C4.62478 15.3345 6.59741 16.1567 8.65625 16.1617H8.7C10.7412 16.1667 12.7022 15.3676 14.1586 13.9375C14.2466 13.8514 14.3168 13.7489 14.3652 13.6357C14.4136 13.5224 14.4392 13.4008 14.4406 13.2777C14.442 13.1546 14.4191 13.0324 14.3733 12.9182C14.3274 12.8039 14.2595 12.6998 14.1734 12.6117C14.0874 12.5237 13.9848 12.4535 13.8716 12.4051C13.7584 12.3567 13.6367 12.3311 13.5136 12.3297C13.3905 12.3284 13.2683 12.3512 13.1541 12.3971C13.0398 12.4429 12.9357 12.5108 12.8477 12.5969H12.8445Z"
                      fill="white"
                    />
                  </svg>

                  <span>Renew now</span>
                </div>
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePaymentStore } from "@/store/payment";
const { handleError } = useErrorHandler();
const { formatDate } = useDateFormatter();

const paymentStore = usePaymentStore();

definePageMeta({
  layout: "dashboard",
});
const loading = ref(true);

const subscriptions = computed(() => {
  return paymentStore.getAllSubscription;
});

const getSubscription = async () => {
  try {
    loading.value = true;
    await paymentStore.getSubscriptions();
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

const cancelSubscription = async (subId: number) => {
  try {
    loading.value = true;
    await paymentStore.cancelSub(subId);
    ElNotification({
      title: "Success",
      message: `Payment has been cancelled`,
      type: "success",
    });
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

const renewSubscription = async (sub: {
  scholar_id: number;
  id: number;
  plan: any;
}) => {
  try {
    const payload = {
      plan_id: sub.plan.id,
      scholar_id: sub.scholar_id,
    };
    loading.value = true;
    const response = await paymentStore.renewSub(payload);
    console.log(response?.data.data);
    window.location.href = response?.data.data.url;
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getSubscription();
});
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 40px 0px;
}
</style>
