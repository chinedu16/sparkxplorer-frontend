<script setup lang="ts">
import { Crown, Clock, BookOpen } from 'lucide-vue-next'

const scholar = {
  firstname: 'Amanda',
  lastname: 'Cortez',
  picture_url: '',
  parent: 'Serah Cortez',
  email: 'Amandacortez411@myemail.com',
  courses: 'Mathematics & English ',
  grade: 2,
}

const stats = [
  {
    icon: Crown,
    title: 'Leaderboard Position',
    value: '24/289',
  },
  {
    icon: Clock,
    title: 'Learning Hours',
    value: '21',
    diff: -88,
    period: 'last month',
  },
  {
    icon: Crown,
    title: 'Answered Questions',
    value: '1576',
    diff: -14,
    period: 'last month',
  },
  {
    icon: BookOpen,
    title: 'Lessons',
    value: '13',
    diff: 18,
    period: 'last month',
  },
]

const emit = defineEmits()
</script>

<template>
  <div class="flex items-center gap-3">
    <ui-avatar size="base">
      <ui-avatar-image v-if="scholar.picture_url" :src="null" :alt="`${scholar.firstnamename} profile picture`" />
      <ui-avatar-fallback class="text-xl">
        AC
      </ui-avatar-fallback>
    </ui-avatar>
    <div class="flex-1 space-y-2">
      <h3 class="text-2xl font-bold truncate">{{ scholar.firstname + ' ' + scholar.lastname }}</h3>
      <div class="flex gap-2 items-center text-muted-foreground">
        <p class="text-sm">Grade {{ scholar.grade }}</p>
      </div>
    </div>
  </div>
  <hr class="bg-border" />
  <AdminUsersScholarsProfileDetails :scholar="scholar" />
  <hr class="bg-border" />
  <div class="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
    <AdminUsersScholarsProfileStats v-for="(stat, i) in stats" :key="i" v-bind="stat" />
  </div>
</template>