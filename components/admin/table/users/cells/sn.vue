<template>
  <span class="px-2 rounded-full py-1 text-sm font-medium bg-muted">
    {{ count }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  count: string
}>()
</script>
