<template>
  <div v-loading.fullscreen.lock="loading" class="flex flex-col h-screen">
    <div class="flex flex-grow overflow-hidden">
      <!-- Sidebar -->
      <LayoutsAuthSidebar class="w-80 bg-red-500 text-white flex-none h-full" />

      <!-- Main Content and Footer Wrapper -->
      <div class="flex flex-col flex-grow">
        <!-- Header -->
        <LayoutsAuthHeader
          :class="userGetStartedLayout"
          class="bg-gray-three flex-none"
        />
        <!-- Main Content -->
        <main
          :class="mainClassSpacing"
          class="flex-grow overflow-auto bg-white"
        >
          <slot />
        </main>
        <!-- Footer -->
        <LayoutsAuthFooter class="flex-none px-6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";

const route = useRoute();
const userStore = useUserStore();

const mainClassSpacing = computed(() => {
  return route.name === "dashboard-feed" ? "" : "p-8";
});

const userGetStartedLayout = computed(() => {
  return route.name === "dashboard-get-started" ? "hidden" : "";
});

const loading = ref(false);

onMounted(() => {
  fetchUserData();
});

const fetchUserData = async () => {
  try {
    loading.value = true;
    await userStore.getCurrentUser();
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

useHead({
  title: "Admin - Spark Xplorer",
  meta: [
    {
      name: "description",
      content: "Equipping a young mind with the tools to innovate.",
    },
  ],
});
</script>

<style scoped></style>
