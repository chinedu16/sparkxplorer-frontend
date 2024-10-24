<template>
  <div class="flex items-center gap-2">
    <ui-avatar>
      <ui-avatar-image v-if="avatar" :src="avatar" :alt="`${name} profile picture`" />
      <ui-avatar-fallback>
        {{ getInitials(name) }}
      </ui-avatar-fallback>
    </ui-avatar>
    <span class="max-w-[12rem] truncate">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { getInitials } from '~/lib/utils';

const props = defineProps<{
  name: string
  avatar?: string | null
}>()
</script>
