<template>
  <ui-data-table :table="table" :row-count="columns.length"
    :row-href="{ page: 'user-types', accessor: 'user_id', query: 'tab=profile' }" />
</template>

<script setup lang="ts">
import { useVueTable, getCoreRowModel } from "@tanstack/vue-table"
import { valueUpdater } from "~/lib/utils"
import { columns } from "@/components/admin/table/parents/columns"
import type { User } from "~/types";

const props = defineProps<{
  scholars: Partial<User[]>
}>()

const route = useRoute();

const users = ref(props.scholars)
const selectedUsers = ref({});
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
  onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, selectedUsers),
  initialState: {
    columnVisibility: {
      user_id: false,
    },
  },
  state: {
    get rowSelection() { return selectedUsers.value },
  }
})


</script>
