<template>
  <div class="px-5 overflow-x-auto">
    <!-- Actions -->
    <section class="flex items-center gap-4 border-b border-slate-200 bg-slate-50 h-12">
      <h1 class="font-semibold capitalize text-xl">Scholars</h1>
      <div class="flex flex-1 justify-end gap-4 items-center">
        <AdminDropdownsActivate>
          <ui-button size="sm" class="gap-2 capitalize" :disabled="!hasSelected">
            <Check :size="16" />
            Activate/Deactivate
          </ui-button>
        </AdminDropdownsActivate>
        <ui-button size="sm" class="gap-2">
          <Download :size="16" />
          Export
        </ui-button>
        <AdminDialogsFilter />
      </div>
    </section>
    <AdminTabsUserTypes />
    <div class="pt-2 border-b border-slate-100 pb-4">
      <h3 class="font-semibold capitalize">Scholars</h3>
      <p class="text-sm">You can manage all scholars here.</p>
    </div>
    <div class="relative w-full my-4 overflow-x-auto rounded-3xl shadow-[0px_4px_4px_0px_#00000040]">
      <ui-data-table :table="table" :row-count="columns.length" :row-href="{ path: route.path, accessor: 'user_id' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  getCoreRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { Download, Search } from 'lucide-vue-next'
import { useUsersStore } from "@/store/users";
import { columns } from '~/components/admin/table/users/columns';
import { valueUpdater } from '~/lib/utils';

definePageMeta({
  layout: 'admin'
})

const { handleError } = useErrorHandler();
const route = useRoute();
const router = useRouter();
const usersStore = useUsersStore();

const data = computed(() => usersStore.getUsers);

const page = ref(route.query.page || '1')
const per_page = ref(route.query.per_page || '10')
const search = ref(route.query.search_query || '')

const loading = ref(false);
const users = ref(data)
const selectedUsers = ref({});

const formatData = (users: any) => data.value.map((user, index) => {
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

const hasSelected = computed(() => {
  if (!users) return false
  console.log(table.getFilteredSelectedRowModel().rows)
  return table.getFilteredSelectedRowModel().rows.length > 0
}
)

onMounted(() => {
  fetchUsersData();
});

const fetchUsersData = async () => {
  try {
    loading.value = true;

    const filters = getFilters()
    const params = new URLSearchParams(filters).toString();
    // router.replace(`/${route.path}?${params}`)
    await usersStore.fetchUsers(params);
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

const getFilters = () => {
  const filter: Record<string, any> = {};
  const end_date = route.query.endDate as string | undefined
  const start_date = route.query.startDate as string | undefined
  const status = route.query.orderStatus as string | undefined
  const currentPage = page
  const perPage = per_page
  const searchQuery = search

  if (start_date) filter.startDate = start_date;
  if (end_date) filter.endDate = end_date;
  if (status) filter.orderStatus = status;
  if (perPage) filter.per_page = perPage;
  if (searchQuery) filter.search_query = searchQuery;
  filter.page = currentPage;

  return filter;
};
</script>
