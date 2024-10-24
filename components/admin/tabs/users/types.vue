<template>
  <nav class="border-b-2 border-slate-200">
    <ul class="grid grid-cols-5">
      <li v-for="(link, i) in navlinks" :key="i" class="">
        <NuxtLink :to="`/admin/users${link.to}?page=1&per_page=10`"
          :class="['font-bold w-full flex hover:text-primary transition-colors items-center justify-center h-11', { 'border-b-2 border-primary text-primary': active === link.name }]">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  active: string
}>()

const navlinks = [
  { label: 'All Users', name: 'all', to: '' },
  { label: 'Admins', name: 'admins', to: '/admin' },
  { label: 'Parents', name: 'parents', to: '/parent' },
  { label: 'Scholars', name: 'scholars', to: '/scholar' },
  { label: 'Tutors', name: 'tutors', to: '/tutor' },
]
</script>
