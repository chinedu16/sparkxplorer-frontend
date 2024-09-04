<template>
  <div class="flex justify-center items-center w-full mt-40">
    <div class="w-7/12">
      <h1 class="font-black text-3xl text-center">
        Hello {{ currentUser?.name }}, Let’s Finish Setting Up Your Account! ☀️
      </h1>
      <div class="demo-collapse my-8 border">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Getting Started" name="1">
            <div class="px-6 space-y-8 pt-6">
              <div class="flex justify-between items-center">
                <div class="flex space-x-4">
                  <div
                    class="w-12 h-12 rounded-full flex items-center justify-center bg-purple-one"
                  >
                    <img src="/assets/images/icons/scholar-two.svg" alt="" />
                  </div>
                  <div class="text-base">
                    <h1 class="font-extrabold">Add Scholar</h1>
                    <p class="text-gray-one">
                      You added one scholar. You can add more scholars
                    </p>
                  </div>
                </div>
                <base-button
                  styles="w-full font-bold"
                  size="medium"
                  type="primary"
                >
                  Add Scholar
                </base-button>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-4">
                  <div
                    class="w-12 h-12 rounded-full flex items-center justify-center bg-purple-one"
                  >
                    <img src="/assets/images/icons/phone.svg" alt="" />
                  </div>
                  <div class="text-base">
                    <h1 class="font-extrabold">Add Phone Number</h1>
                    <p class="text-gray-one">
                      Receive alerts about your scholars
                    </p>
                  </div>
                </div>
                <base-button
                  styles="w-full font-bold"
                  size="medium"
                  type="primary"
                >
                  Add Mobile
                </base-button>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-4">
                  <div
                    class="w-12 h-12 rounded-full flex items-center justify-center bg-purple-one"
                  >
                    <img src="/assets/images/icons/verify.svg" alt="" />
                  </div>
                  <div class="text-base">
                    <h1 class="font-extrabold">Verify Your Account</h1>
                    <p class="text-gray-one">
                      Get the most of Spark Xplorer by verifying your account
                    </p>
                  </div>
                </div>
                <base-button
                  styles="w-full font-bold"
                  size="medium"
                  type="primary"
                  :loading="isGettingOtp"
                  @click="handleGetOtp"
                >
                  Verify
                </base-button>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <base-button
        styles="w-full font-bold bg-white text-primary"
        type="primary"
        bgColor="#FFFFFF"
        textColor="#4F46E5"
        borderColor="#4F46E5"
        @click="goToDashboard"
      >
        I will do these later
      </base-button>
    </div>

    <common-otp-dialog
      :email="currentUser?.email"
      :openModal="openOptModal"
      @submit="handleOtpSubmit"
      :loading="isLoadingVerify"
    />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { useAuthStore } from "@/store/auth";
const { handleError } = useErrorHandler();

const userStore = useUserStore();
const authStore = useAuthStore();

definePageMeta({
  layout: "dashboard",
});

const currentUser = computed(() => {
  return userStore.getUserInfo;
});

const getLoggedInUser = async () => {
  await userStore.getCurrentUser();
};

getLoggedInUser();

const activeNames = ref(["1"]);
const openOptModal = ref(false);
const isGettingOtp = ref(false);
const isLoadingVerify = ref(false);

const handleChange = (val: string[]) => {
  console.log(val);
};

const handleGetOtp = async () => {
  try {
    isGettingOtp.value = true;
    const { data, error } = await authStore.getTwoFaCode();
    if (error) {
      handleError(error);
      return;
    }
    if (data.success) {
      openOptModal.value = true;
    }
  } catch (error) {
    handleError(error);
  } finally {
    isGettingOtp.value = false;
  }
};

const handleOtpSubmit = async (otp: string) => {
  try {
    isLoadingVerify.value = true;
    const payload = {
      code: otp,
    };
    const { data, error } = await authStore.verifyAccount(payload);
    if (error) {
      handleError(error);
      return;
    }
    if (data.success) {
      openOptModal.value = false;
      getLoggedInUser();
    }
  } catch (error) {
    handleError(error);
  } finally {
    isLoadingVerify.value = false;
  }
};

const goToDashboard = () => {
  navigateTo("/dashboard");
};
</script>

<style scoped></style>
