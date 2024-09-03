<template>
  <div class="container">
    <div v-if="loading" class="spinner"></div>
    <!-- Your other content goes here -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const loading = ref(true);
import { useAuthStore } from "@/store/auth";

const router = useRouter();
const authStore = useAuthStore();


onMounted(async () => {
  const route = useRoute();
  const code = route.query.code;

  if (code) {
    try {
      const response = await authStore.getGoogleToken({code});
      if (response.data?.token) {
        console.log("User logged in with token:", response.data.token);
      } else {
        console.error("Token not found in response:", response.data);
      }
    } catch (error) {
      console.error("Error during token retrieval:", error);
    } finally {
      loading.value = false;
    }
  } else {
    console.error("Code query parameter is missing");
    loading.value = false;
  }
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.spinner {
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #4f46e5;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
