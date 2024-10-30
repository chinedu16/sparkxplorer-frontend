<template>
  <ui-data-table :table="table" :row-count="columns.length"
    :row-href="{ page: 'user-types', accessor: 'scholar_id', query: 'tab=profile' }" />
</template>

<script setup lang="ts">
import { useVueTable, getCoreRowModel } from "@tanstack/vue-table"
import { columns } from "@/components/admin/table/scholars/columns"

const route = useRoute();

const users = ref([
  { name: 'Greenwood John', picture_url: '', subject: 'Mathematics', type: 'professional', date: '2025/18/16' },
  { name: 'Anny Lawal', picture_url: '', subject: 'Anatomy', type: 'peer-to-peer', date: '2025/18/16' },
  { name: 'Christopher Mackenzie', picture_url: '', subject: 'Mathematics', type: 'peer-to-peer', date: '2025/18/16' },
  { name: 'Annie Blake', picture_url: '', subject: 'Mathematics', type: 'professional', date: '2025/18/16' },
])
const page = ref(route.query.page || '1')
const per_page = ref(route.query.per_page || '10')

const formatData = (data: typeof users) => data.value.map((user, index) => {
  const currentPage = Number(page.value)
  const perPage = Number(per_page.value)

  return {
    sn: currentPage && perPage ? (currentPage - 1) * perPage + (index + 1) : 0,
    ...user
  }
})
const table = useVueTable({
  get data() { return formatData(users) },
  get columns() { return columns },
  getCoreRowModel: getCoreRowModel(),
  initialState: {
    columnVisibility: {
      scholar_id: false,
    },
  },
})
</script>
