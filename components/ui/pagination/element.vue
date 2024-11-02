<script setup lang="ts">
import type { HTMLAttributes, VNode } from "vue";
import { cn } from "~/lib/utils";

const { isActive, ...props } = defineProps<{
  class?: HTMLAttributes["class"];
  isActive?: boolean;
}>();
</script>

<template>
  <ui-button
    variant="ghost"
    size="icon"
    :disabled="isActive"
    :class="
      cn(
        'hover:bg-primary/5',
        {
          'bg-primary/5 hover:bg-primary/5 disabled:opacity-90 text-primary':
            isActive,
        },
        props.class
      )
    "
  >
    <slot />
  </ui-button>
</template>
