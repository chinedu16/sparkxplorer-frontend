<template>
  <div class="container">
    <div v-if="loading" class="spinner-big"></div>
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

</style>
