<template>
  <div class="px-5 overflow-x-auto">
    <!-- Actions -->
    <section class="flex items-center gap-4 border-b border-slate-200 bg-slate-50 h-12">
      <h1 class="font-bold text-2xl">All Users</h1>
      <div class="flex flex-1 justify-end gap-4 items-center">
        <!-- <Button rounded class="text-sm gap-2 font-medium px-8">
          <User :size="18" />
          Add Tutor
        </Button>
        <Button rounded class="text-sm gap-2 font-medium px-8">
          <Users :size="18" />
          Assign Tutor
        </Button> -->
        <Button rounded class="gap-2 font-medium text-sm">
          <Check :size="18" />
          Activate/Deactivate
        </Button>
        <Button rounded class="text-sm gap-2 font-medium px-8">
          <Download :size="18" />
          Export
        </Button>
        <Button rounded class="gap-2 bg-slate-800 font-medium text-sm hover:bg-slate-700">
          <ListFilter :size="18" />
          Filter
        </Button>
        <div class="relative">
          <InputText v-model="search" type="text" placeholder="Search"
            class="pr-9 border-slate-300 !rounded-full border placeholder:text-slate-400 placeholder:text-sm" />
          <span class="absolute inset-y-0 end-0 w-9 h-9 flex items-center justify-center">
            <Search :size="18" class="text-slate-300" />
          </span>
        </div>
      </div>
    </section>
    <nav class="border-b-2 border-slate-200">
      <ul class="grid grid-cols-5">
        <li v-for="(link, i) in navlinks" :key="i" class="">
          <NuxtLink :to="link.href" class="font-medium w-full flex items-center justify-center h-10"
            active-class="border-b-2 border-primary text-primary">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <IconsCard />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check, Download, ListFilter, Search, User, Users } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const search = ref('')

const navlinks = [
  { name: 'All Users', href: '/admin/users' },
  { name: 'Admin', href: '/admin/users/admin-users' },
  { name: 'Parents', href: '/admin/users/parents' },
  { name: 'Scholars', href: '/admin/users/scholars' },
  { name: 'Tutors', href: '/admin/users/tutors' },
]
</script>

<style></style>