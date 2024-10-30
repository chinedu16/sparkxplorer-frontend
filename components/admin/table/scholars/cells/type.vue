<template>
  <span v-if="peerToPeer" class="px-2 rounded-full py-1 text-sm font-medium text-yellow-600 bg-yellow-50">
    <Check :size="16" />
    Peer To Peer
  </span>
  <span v-if="professional" class="px-2 rounded-full py-1 text-sm font-medium text-primary bg-primary/5">
    <X :size="16" />
    Professional
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string
}>()

const peerToPeer = computed(() => props.type === 'peer-to-peer')
const professional = computed(() => props.type === 'professional')
</script>
