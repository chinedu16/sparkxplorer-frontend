<template>
  <AdminLayout title="All Users" active="all" :subheader="subheader">
    <template #actions>
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
      <AdminSearchUsers />
    </template>
    {{ selectedUsers }}
    <div
      class="relative w-full my-4 overflow-x-auto rounded-3xl shadow-[0px_4px_4px_0px_#00000040]"
    >
      <div v-if="status === 'pending'" class="min-h-96 grid place-items-center">
        <LoaderCircle class="w-8 h-8 text-primary animate-spin" />
      </div>
      <div
        v-else-if="status === 'error'"
        class="min-h-96 grid place-items-center"
      >
        <div class="flex flex-col items-center gap-4">
          <p class="font-medium max-w-md">Error: {{ error }}</p>
          <ui-button class="gap-3" @click="execute()">
            Retry
            <RefreshCw :size="16" />
          </ui-button>
        </div>
      </div>
      <ui-data-table
        v-else
        v-model:selected-rows="selectedUsers"
        :data="users"
        :columns="columns"
        :options="{
          rowCount: totalDocs,
          initialState: {
            columnVisibility: {
              user_id: false,
            },
          },
          state: {
            get rowSelection() {
              return selectedUsers;
            },
          },
        }"
        :row-href="{
          page: 'user-types',
          accessor: 'user_id',
          query: 'tab=profile',
        }"
      />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  getCoreRowModel,
  useVueTable,
  type RowSelectionState,
} from "@tanstack/vue-table";
import { Download, LoaderCircle, RefreshCw } from "lucide-vue-next";
import { columns } from "~/components/admin/table/users/columns";
import { toURLSearchParamsString, valueUpdater } from "~/lib/utils";
import type { ApiResponse, User, UsersResponse } from "~/types";

definePageMeta({
  layout: "admin",
});

const subheader = {
  title: "All Users",
  description: "You can manage all users here.",
};

const route = useRoute();

const query = toURLSearchParamsString(route.query);

const searchParams = ref(query);
const page = ref(route.query.page || "1");
const per_page = ref(route.query.per_page || "10");
const selectedUsers = ref<RowSelectionState>({});

const url = computed(() => `/users?${searchParams.value}`);

const { data, error, status, execute } =
  useApiFetch<ApiResponse<UsersResponse>>(url);

const users = computed(() => {
  const response = data.value?.data;
  if (!response) return [];

  return response.results?.map((user, index) => {
    const currentPage = Number(page.value);
    const perPage = Number(per_page.value);

    return {
      sn:
        currentPage && perPage ? (currentPage - 1) * perPage + (index + 1) : 0,
      ...user,
    } as User;
  });
});
const totalDocs = computed(() => data.value?.data?.totalDocs);

// const table = useVueTable({
//   get data() {
//     return users;
//   },
//   get columns() {
//     return columns;
//   },
//   getCoreRowModel: getCoreRowModel(),
//   onRowSelectionChange: (updaterOrValue) =>
//     valueUpdater(updaterOrValue, selectedUsers),
//   manualPagination: true,
//   rowCount: data.value?.data?.totalDocs,
//   initialState: {
//     columnVisibility: {
//       user_id: false,
//     },
//   },
//   state: {
//     get rowSelection() {
//       return selectedUsers.value;
//     },
//   },
// });

// const hasSelected = computed(() => {
//   if (!users) return false;
//   return selectedUsers.value.length > 0;
// });

watch(
  () => route.query,
  () => {
    searchParams.value = toURLSearchParamsString(route.query);
  }
);
</script>
