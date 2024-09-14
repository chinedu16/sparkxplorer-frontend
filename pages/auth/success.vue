<template>
    <div class="container flex justify-center items-center min-h-screen">
      
      <div class="text-center flex flex-col justify-center items-center">
        <img class="w-12 h-12" src="@/assets/images/icons/check-success.png" alt="">
        <h2 class="text-2xl font-bold mt-4">
          Transaction Successful!
        </h2>
        <p class="mt-2 text-gray-600">
          Redirecting in <span class="font-bold">{{ countdown }}</span> seconds...
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  
  const countdown = ref(5);
  
  const router = useRouter();
  
  onMounted(async () => {

    const countdownInterval = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--;
      } else {
        clearInterval(countdownInterval);
        router.push("/dashboard");
      }
    }, 1000);
  });
  </script>
  
  <style scoped>
  
  </style>
  