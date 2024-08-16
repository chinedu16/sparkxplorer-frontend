<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-grow overflow-hidden">
      <!-- Sidebar -->
      <LayoutsAuthSidebar
        class="w-80 bg-primary text-white flex-none h-full"
      />

      <!-- Main Content and Footer Wrapper -->
      <div class="flex flex-col flex-grow">
        <!-- Header -->
        <LayoutsAuthHeader class="bg-gray-three flex-none" />
        <!-- Main Content -->
        <main class="flex-grow p-6 overflow-auto bg-white">
          <slot />
        </main>
        <!-- Footer -->
        <LayoutsFooter class=" flex-none px-6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
