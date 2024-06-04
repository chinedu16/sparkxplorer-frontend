<template>
  <div class="h-96 lg:h-700">
    <div
      class="bg-green-500 p-4 rounded flex flex-col justify-center items-center"
    >
      <div
        class="flex text-white space-x-2 font-semibold items-center justify-center"
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
        <span>Made Payment Successfull</span>
      </div>
      <el-button class="mt-3" @click="goToHome()">Go back home</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToHome = () => {
  router.push("/");
};
</script>

<style scoped></style>
