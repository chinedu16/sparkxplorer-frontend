<template>
  <div class="h-96 lg:h-700" v-loading.fullscreen.lock="fullscreenLoading">
    <div
      v-if="showSuccessCheck"
      class="flex text-white space-x-2 font-semibold items-center justify-center bg-green-500 p-4 rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-white"
      >
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
      <span>Email has been verified</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ElNotification } from "element-plus";
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
const fullscreenLoading = ref(false);
const showSuccessCheck = ref(false);
const route = useRoute();

onMounted(() => {
  verifyTokenHandler();
});

// http://localhost:3001/auth/email-verification?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5b2JhbWlAZ21haWwuY29tIiwiaWF0IjoxNzEzMTI2NTc2LCJleHAiOjE3MTMyOTkzNzZ9.7_A-KtVTUkMar0EhZYWNTo6yNMYubNm4t7b4K7sqLmc

const verifyTokenHandler = async () => {
  fullscreenLoading.value = true;
  try {
    const token = route.query.token;
    const payload = {
      token: token,
    };
    const { data, error } = await authStore.verifyToken(payload);

    if (data) {
      showSuccessCheck.value = true;
    }

    if (error) {
      ElNotification({
        title: "Error",
        message: "The validation was not complete, please retry with correct link",
        type: "error",
      });
      return;
    }
  } catch (error) {
  } finally {
    fullscreenLoading.value = false;
  }
};

// await sparkStore.donateToAScholar(payload)
</script>

<style scoped></style>
