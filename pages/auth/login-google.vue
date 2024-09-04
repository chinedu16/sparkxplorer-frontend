<template>
  <div class="container">
    <div v-if="loading" class="spinner-big"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const loading = ref(true);
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";

const authStore = useAuthStore();
const userStore = useUserStore();

onMounted(async () => {
  const route = useRoute();
  const code = route.query.code;

  if (code) {
    try {
      const payload = {
        code,
        mode: "login",
      };
      const { data, error } = await authStore.getGoogleToken(payload as any);
      if (data.success) {
        localStorage.setItem("USER", JSON.stringify(data.data));
        localStorage.setItem("TOKEN", data.data.accessToken);
        const response = await userStore.getCurrentUser();
        if (response.data.success) {
          if (
            response.data.data.primary_role === "parent" &&
            response.data.data.parent.no_scholars === 0
          ) {
            navigateTo("/auth/onboarding");
          } else {
            navigateTo("/dashboard");
          }
        }
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

<style scoped></style>
