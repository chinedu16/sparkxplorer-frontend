<template>
  <nav class="border-b-2 border-slate-200 inline-flex">
    <NuxtLink v-for="tab in tabs" :key="tab.name" :to="tab.to"
      :class="['font-semibold text-sm px-5 hover:text-primary transition-colors flex items-center h-11', { 'border-b-2 border-primary text-primary': route.query.tab === tab.name }]">
      {{ tab.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  tabs: { name: string, label: string, to: string }[]
}>()

const route = useRoute()
</script>
