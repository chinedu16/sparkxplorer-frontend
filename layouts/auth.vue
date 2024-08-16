<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-grow overflow-hidden">
      <main class="flex-grow overflow-auto bg-white">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Spark Explorer",
  meta: [
    {
      name: "description",
      content: "Equipping a young mind with the tools to innovate.",
    },
  ],
});
</script>

<style>

</style>
