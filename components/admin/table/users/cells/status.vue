<template>
  <span v-if="isActivated"
    class="px-5 rounded-full py-1.5 text-sm font-medium text-white bg-success inline-flex items-center gap-1.5">
    <Check :size="16" />
    Activated
  </span>
  <span v-if="isDeactivated"
    class="inline-flex items-center gap-1.5 px-5 rounded-full py-1.5 text-sm font-medium text-white bg-destructive">
    <X :size="16" />
    Not Activated
  </span>
</template>

<script setup lang="ts">
import { Check, X } from 'lucide-vue-next'

const props = defineProps<{
  status: string
}>()

const isActivated = computed(() => props.status === 'activated')
const isDeactivated = computed(() => props.status === 'deactivated')
</script>
