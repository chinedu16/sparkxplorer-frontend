<template>
  <ui-breadcrumb>
    <ui-breadcrumb-list class="font-medium">
      <ui-breadcrumb-item>
        <ui-breadcrumb-page></ui-breadcrumb-page>
        <Plus :size="20" />
      </ui-breadcrumb-item>
      <ui-breadcrumb-separator stroke-width="3" class="text-slate-300">
        <ChevronRight :size="20" />
      </ui-breadcrumb-separator>
      <ui-breadcrumb-item>
        <ui-breadcrumbLink as-child class="capitalize">
          <NuxtLink :to="`/admin/users/${name}`">
            {{ name }}
          </NuxtLink>
        </ui-breadcrumbLink>
      </ui-breadcrumb-item>
      <ui-breadcrumb-separator stroke-width="3" class="text-slate-300">
        <ChevronRight :size="20" />
      </ui-breadcrumb-separator>
      <slot />
    </ui-breadcrumb-list>
  </ui-breadcrumb>
</template>

<script setup lang="ts">
import { Plus, ChevronRight } from 'lucide-vue-next';

defineProps<{
  name: string
}>()
</script>
