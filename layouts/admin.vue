<template>
  <div v-loading.fullscreen.lock="loading" class="flex flex-col h-screen">
    <!-- Header -->
    <ui-header />

    <div class="flex">
      <!-- Sidebar -->
      <ui-sidebar />

      <!-- Main Content and Footer Wrapper -->
      <div class="flex flex-col flex-1 overflow-x-auto">
        <!-- Main Content -->
        <main class="flex-1 text-gray-two min-w-[960px]">
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
