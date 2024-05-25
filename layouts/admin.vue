<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <LayoutsAuthHeader class="bg-blue-600 text-white flex-none" />

    <div class="flex flex-grow overflow-hidden">
      <!-- Sidebar -->
      <LayoutsAuthSidebar class="w-60 bg-custom-gradient text-white flex-none h-full" />

      <!-- Main Content -->
      <main class="flex-grow p-6 overflow-auto bg-gray-100">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
