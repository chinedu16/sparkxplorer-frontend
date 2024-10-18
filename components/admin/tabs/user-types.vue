<template>
  <nav class="border-b-2 border-slate-200">
    <ul class="grid grid-cols-5">
      <li v-for="(link, i) in navlinks" :key="i" class="">
        <NuxtLink v-if="link.name" :to="`/admin/users?type=${link.name}`"
          :class="['font-bold w-full flex hover:text-primary transition-colors items-center justify-center h-11', { 'border-b-2 border-primary text-primary': route.query.type === link.name }]">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink v-else :to="`/admin/users`"
          :class="['font-bold w-full flex hover:text-primary transition-colors items-center justify-center h-11', { 'border-b-2 border-primary text-primary': !route.query.type }]">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const navlinks = [
  { label: 'All Users', name: '' },
  { label: 'Admin', name: 'admin' },
  { label: 'Parents', name: 'parents' },
  { label: 'Scholars', name: 'scholars' },
  { label: 'Tutors', name: 'tutors' },
]
</script>
