<script setup lang="ts" generic="TData, TValue">
import { FlexRender, getCoreRowModel, useVueTable } from "@tanstack/vue-table";
import type { ColumnDef, Row, TableOptions } from "@tanstack/vue-table";
import { valueUpdater } from "~/lib/utils";
import type { Role } from "~/types";

const selectedRows = defineModel("selectedRows");
const pagination = defineModel("pagination");

const props = defineProps<{
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  options?: Partial<TableOptions<TData>>;
  rowHref?: {
    path?: string;
    accessor: string;
    page?: "user-types";
    query?: string;
  };
  // selectedRows: unknown
  // table: Table<User>
}>();

const table = useVueTable({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
  onRowSelectionChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, selectedRows),
  manualPagination: true,
  ...props.options,
});

const router = useRouter();

const navigateTopage = (row: Row<TData>) => {
  if (props.rowHref) {
    const qs = props.rowHref.query ? "?" + props.rowHref.query : "";

    if (props.rowHref?.page === "user-types") {
      const userRole = row.getValue<Role>("role_name");
      const rolePath = userRole.includes("admin") ? "admin" : userRole;

      router.push(
        `/admin/users/${rolePath}/${row.getValue(props.rowHref.accessor)}${qs}`
      );
      return;
    }
    router.push(
      `${props.rowHref.path}/${row.getValue(props.rowHref.accessor)}${qs}`
    );
  }
};
</script>

<template>
  <ui-table>
    <ui-table-header>
      <ui-table-row
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
        class="bg-muted hover:bg-muted"
      >
        <ui-table-head v-for="header in headerGroup.headers" :key="header.id">
          <FlexRender
            v-if="!header.isPlaceholder"
            :render="header.column.columnDef.header"
            :props="header.getContext()"
          />
        </ui-table-head>
      </ui-table-row>
    </ui-table-header>
    <ui-table-body>
      <template v-if="table.getRowModel().rows?.length">
        <ui-table-row
          v-for="row in table.getRowModel().rows"
          :key="row.id"
          :class="{ 'cursor-pointer': rowHref }"
          :data-state="row.getIsSelected() ? 'selected' : undefined"
          @click="() => navigateTopage(row)"
        >
          <ui-table-cell v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </ui-table-cell>
        </ui-table-row>
      </template>
      <template v-else>
        <ui-table-row>
          <ui-table-cell :colspan="table.getRowCount" class="h-24 text-center">
            No results.
          </ui-table-cell>
        </ui-table-row>
      </template>
    </ui-table-body>
  </ui-table>
</template>
