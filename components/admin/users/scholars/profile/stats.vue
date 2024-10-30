<template>
  <ui-card class="card-shadow">
    <ui-card-header class="pb-3">
      <span class="bg-primary/5 text-primary rounded-full h-10 w-10 inline-flex items-center justify-center">
        <component :is="icon" class="w-5 h-5" />
      </span>
    </ui-card-header>
    <ui-card-content>
      <h5 class="text-sm mb-3">{{ title }}</h5>
      <div class="flex items-center gap-3 justify-between">
        <h2 class="text-xl font-semibold">{{ value }}</h2>
        <p v-if="diff" class="text-xs flex items-center gap-1" :class="diff > 0 ? 'text-success' : 'text-destructive'">
          <TrendingDown v-if="diff < 0" :size="14" />
          <TrendingUp v-if="diff > 0" :size="14" />
          {{ diff }}%
          <span v-if="period" class="text-foreground gap-1">vs {{ period }}</span>
        </p>
      </div>
    </ui-card-content>
  </ui-card>
</template>

<script setup lang="ts">
import type { VNode } from 'vue';
import { TrendingDown, TrendingUp } from 'lucide-vue-next';

defineProps<{
  icon: VNode,
  title: string,
  value: string,
  diff?: number,
  period?: string
}>()
</script>

<style scoped>
.card-shadow {
  box-shadow: 0px 2px 4px -2px #1717170F;
  box-shadow: 0px 4px 8px -2px #1717171A;
}
</style>