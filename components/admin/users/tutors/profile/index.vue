<script setup lang="ts">
import { User2, Mail, Phone, MessageCircleMore, GraduationCap } from 'lucide-vue-next'

const emit = defineEmits()
</script>

<template>
  <div class="flex items-center gap-4 w-full">
    <div class="flex items-center gap-3 flex-1">
      <ui-avatar size="lg">
        <ui-avatar-image v-if="avatar" :src="null" :alt="`${name} profile picture`" />
        <ui-avatar-fallback class="text-3xl">
          MM
        </ui-avatar-fallback>
      </ui-avatar>
      <div class="flex-1 space-y-2">
        <h3 class="text-2xl font-bold truncate">Myron McDonalds</h3>
        <div class="flex gap-2 items-center text-muted-foreground">
          <GraduationCap :size="16" />
          <p class="text-sm">University of Michigan</p>-
          <p class="text-sm">BSc. Applied Mathematics</p>
        </div>
        <div class="flex gap-2 items-center text-sm">
          Expertise
          <small class="bg-primary/5 text-primary px-2 py-1">
            Mathematics
          </small>
          <small class="bg-yellow-500/5 text-yellow-500 px-2 py-1">
            Social Studies
          </small>
        </div>
      </div>
    </div>
    <div class="bg-primary/10 rounded-full py-2 px-4 flex text-primary items-center gap-2">
      <p class="font-medium text-sm">Chat with Myron</p>
      <MessageCircleMore :size="14" />
    </div>
  </div>
  <AdminUsersTutorsProfileDetails :tutor="tutor" />
  <AdminUsersTutorsProfileReviewSummary />
  <AdminUsersTutorsProfileReviews />
</template>