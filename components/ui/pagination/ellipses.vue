<script setup lang="ts">
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-vue-next";
import { type HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <span
    aria-hidden
    :class="cn('flex h-9 w-9 items-center justify-center', props.class)"
  >
    <slot>
      <MoreHorizontal :size="16" />
    </slot>
    <span className="sr-only">More pages</span>
  </span>
</template>
