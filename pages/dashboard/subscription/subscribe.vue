<template>
  <div v-if="loading" class="container">
    <div class="spinner-big"></div>
  </div>
  <div v-else class="flex flex-col min-h-screen">
    <!-- Header Component -->

    <div class="max-w-screen-2xl px-5 mx-auto w-full">
      <div class="flex justify-between border-t py-4">
        <nuxt-link to="/dashboard">
          <img
            class="cursor-pointer"
            src="~/assets/images/icons/logo-sparkexplorer.svg"
            alt=""
          />
        </nuxt-link>
        <div class="">
          <base-button
            styles="w-full font-bold bg-white text-primary"
            size="large"
            type="primary"
            bgColor="#ffffff"
            textColor="#475569"
            borderColor="#475569"
          >
            Contact Us
          </base-button>
        </div>
      </div>
    </div>

    <div class="mb-20 flex-grow px-5 max-w-screen-2xl mx-auto w-full">
      <div class="mt-20 flex flex-col items-center justify-center">
        <div
          class="text-sm py-2 px-5 w-fit font-semibold text-primary bg-purple-one rounded-full"
        >
          Our Pricing
        </div>
        <h2 class="text-4xl font-extrabold mt-6">
          Get Started with Spark Xplorer
        </h2>
        <p class="mt-6 text-xl text-gray-one">
          With our annual plan, you get a full experience of our service.
        </p>

        <div class="flex space-x-4 items-center my-12">
          <h4 class="text-gray-one text-xl">Number of scholars</h4>
          <el-input-number
            class="input-number"
            size="large"
            v-model="numberOfScholar"
            :min="1"
            :max="40"
            @change="handleChange"
          />
        </div>

        <div class="w-full flex justify-center items-center">
          <div class="w-11/12 space-x-8 flex">
            <div v-for="plan in plans" class="w-1/2 rounded-3xl border p-6">
              <div class="flex justify-between">
                <span class="text-lg text-primary capitalize font-bold">{{
                  plan.duration
                }}</span>
                <span
                  v-if="plan.is_discount_active"
                  class="text-sm rounded-full p-2 text-primary bg-purple-one"
                  >10% OFF</span
                >
              </div>

              <div class="mt-5 text-gray-one text-2xl mb-8">
                <span class="text-gray-two font-black text-5xl"
                  >{{ plan.currency }} {{ plan.amount * numberOfScholar }}</span
                >/{{ plan.duration }}/scholar
              </div>
              <hr />
              <div class="space-y-3 my-6">
                <div class="flex space-x-3">
                  <img src="~/assets/images/icons/check-primary.svg" alt="" />
                  <span>Mathematics (Pre-K to Calc)</span>
                </div>
                <div class="flex space-x-3">
                  <img src="~/assets/images/icons/check-primary.svg" alt="" />
                  <span>Language Arts (Pre-K to 12)</span>
                </div>
                <div class="flex space-x-3">
                  <img src="~/assets/images/icons/check-primary.svg" alt="" />
                  <span>Science (K to Biology)</span>
                </div>
                <div class="flex space-x-3">
                  <img src="~/assets/images/icons/check-primary.svg" alt="" />
                  <span>Social Studies (K to Civics and government)</span>
                </div>
              </div>
              <base-button
                styles="w-full mt-4 font-bold"
                size=""
                @click="subscribePlan(plan)"
                :loading="isSubscribingPlan"
                type="primary"
              >
                Subscribe Now
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <layouts-footer class="mt-auto"></layouts-footer>
  </div>
</template>

<script setup lang="ts">
import { usePaymentStore } from "@/store/payment";
const { handleError } = useErrorHandler();

const paymentStore = usePaymentStore();

definePageMeta({
  layout: "auth",
});

const loading = ref(true);
const isSubscribingPlan = ref(false);
const numberOfScholar = ref(1);

const plans = computed(() => {
  return paymentStore.getPaymentPlan;
});

const subscribePlan = async (plan: { id: number }) => {
  try {
    isSubscribingPlan.value = true;
    const payload = {
      plan_id: plan.id,
      no_of_scholars: numberOfScholar.value,
    };
    const { data, error } = await paymentStore.getPaymentStripeLink(payload);
    if (data.success) {
      window.location.href = data.data.url;
    }
  } catch (error) {
    handleError(error);
  } finally {
    isSubscribingPlan.value = false;
  }
};

const getPlans = async () => {
  try {
    loading.value = true;
    await paymentStore.getPlanPayment();
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getPlans();
});

const handleChange = (value: number) => {
  numberOfScholar.value = value;
};
</script>

<style>
.input-number .el-input-number__decrease {
  border-radius: 123px 0px 0px 123px;
}

.input-number .el-input-number__increase {
  border-radius: 0px 123px 123px 0px;
}

.input-number .el-input__wrapper {
  border-radius: 123px;
}
</style>
