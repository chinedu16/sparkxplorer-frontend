<template>
  <div>
    
    <main>
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Spark Brigde - Home",
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
