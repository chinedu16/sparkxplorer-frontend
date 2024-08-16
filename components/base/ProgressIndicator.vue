<template>
  <div class="flex space-x-2">
    <div
      v-for="index in count"
      :key="index"
      :class="[
        'w-9 h-2 rounded-lg',
        index <= activeIndex ? 'bg-primary' : 'bg-gray-200',
      ]"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    required: true,
    default: 3,
  },
  activeIndex: {
    type: Number,
    required: true,
    default: 0,
  },
});
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
