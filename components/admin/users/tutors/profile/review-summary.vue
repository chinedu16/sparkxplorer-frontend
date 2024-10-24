<template>
  <div class="grid grid-cols-3">
    <div class="flex gap-3 items-center justify-center text-sm border border-border h-16">
      <Star :size="16" class="text-yellow-500" />
      <div class="">
        <span class="block font-medium text-center">4.95</span>
        <span class="block">Rating</span>
      </div>
    </div>
    <div class="flex gap-3 items-center justify-center text-sm border border-border h-16">
      <Clock :size="16" class="text-green-500" />
      <div class="">
        <span class="block font-medium text-center">50</span>
        <span class="block">Teaching Hours</span>
      </div>
    </div>
    <div class="flex gap-3 items-center justify-center text-sm border border-border h-16">
      <IconsGradStudent :size="16" class="text-primary" />
      <div class="">
        <span class="block font-medium text-center">30</span>
        <span class="block">Students</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star, Clock } from 'lucide-vue-next'
</script>

<style scoped></style>