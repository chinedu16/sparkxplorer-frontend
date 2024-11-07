<template>
  <AdminLayout title="Parents" active="parents" :subheader="subheader">
    <template #actions>
      <AdminDropdownsActivate>
        <ui-button size="sm" class="gap-2 capitalize">
          <Check :size="16" />
          Activate/Deactivate
        </ui-button>
      </AdminDropdownsActivate>
      <ui-button size="sm" class="gap-2">
        <Download :size="16" />
        Export
      </ui-button>
      <AdminDialogsFilter />
      <!-- Search -->
      <AdminSearchUsers />
    </template>

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
        v-model:pagination="pagination"
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
            pagination,
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
        :pages="users.length > 0"
      />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  type PaginationState,
  type RowSelectionState,
} from "@tanstack/vue-table";
import { Download, LoaderCircle, RefreshCw } from "lucide-vue-next";
import { columns } from "~/components/admin/table/users/columns";
import { toURLSearchParamsString } from "~/lib/utils";
import type { ApiResponse, User, UsersResponse } from "~/types";

definePageMeta({
  layout: "admin",
});

const subheader = {
  title: "Parents",
  description: "You can manage all parents here.",
};

const INITIAL_PAGE_INDEX = 0;
const INITIAL_PAGE_SIZE = 10;

const route = useRoute();

const query = toURLSearchParamsString(route.query);

const searchParams = ref(query);
const page = ref(
  route.query.page ? Number(route.query.page) - 1 : INITIAL_PAGE_INDEX
);
const per_page = ref(
  route.query.per_page ? Number(route.query.per_page) : INITIAL_PAGE_SIZE
);
const selectedUsers = ref<RowSelectionState>({});

const pagination = ref<PaginationState>({
  pageIndex: Number(page.value),
  pageSize: Number(per_page.value),
});

const url = computed(() => `/users?type=tutor&${searchParams.value}`);

const { data, error, status, execute } =
  useApiFetch<ApiResponse<UsersResponse>>(url);

const users = computed(() => {
  const response = data.value?.data;
  if (!response) return [];

  return response.results?.map(
    (user, index) =>
      ({
        sn: page.value * per_page.value + (index + 1),
        ...user,
      } as User)
  );
});
const totalDocs = computed(() => data.value?.data?.total);

watch(
  () => route.query,
  () => {
    searchParams.value = toURLSearchParamsString(route.query);
    page.value = Number(route.query.page) - 1;
  }
);
</script>
