<template>
  <div class="px-5 overflow-x-auto">
    <section class="flex items-center gap-4 border-b border-slate-200 bg-slate-50 h-12">
      <!-- Title -->
      <slot name="title">
        <h1 class="font-semibold capitalize text-xl">{{ title }}</h1>
      </slot>

      <!-- Actions -->
      <div class="flex flex-1 justify-end gap-4 items-center">
        <slot name="actions"></slot>
      </div>
    </section>

    <!-- Navigation -->
    <slot name="users-nav">
      <AdminTabsUsersTypes :active="active || ''" />
    </slot>

    <!-- sub navigation -->
    <slot name="sub-nav" />

    <!-- Sub Header -->
    <slot name="sub-header">
      <div v-if="subheader" class="pt-2 border-b border-slate-100 pb-4">
        <h3 class="font-semibold capitalize">{{ subheader?.title || '' }}</h3>
        <p class="text-sm">{{ subheader?.description || '' }}</p>
      </div>
    </slot>

    <!-- Main content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  active: string
  subheader?: { title: string, description: string }
}>()
</script>
