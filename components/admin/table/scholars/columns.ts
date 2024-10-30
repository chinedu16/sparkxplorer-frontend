import { h } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";

import TableCellName from "@/components/admin/table/users/cells/name.vue";
import TableCellType from "@/components/admin/table/tutors/cells/type.vue";
import DataTableRowActionsAccept from "@/components/admin/dialogs/scholars/accept.vue";
import DataTableRowActionsReject from "@/components/admin/dialogs/scholars/reject.vue";

export const columns: ColumnDef<Record<string, string | number>>[] = [
  {
    accessorKey: "scholar_id",
  },
  {
    accessorKey: "name",
    header: "Scholar Name",
    cell: ({ row }) => {
      const scholar = row.original;
      return h(
        TableCellName,
        { name: scholar.name as string, avatar: scholar.picture_url as string },
        row.getValue("name")
      );
    },
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) =>
      h("div", { class: "max-w-[15rem] truncate" }, row.getValue("subject")),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const scholar = row.original;
      return h(
        TableCellType,
        { type: scholar.type as string },
        row.getValue("type")
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return h(DataTableRowActionsAccept, {
        user,
        onExpand: row.toggleExpanded,
      });
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return h(DataTableRowActionsReject, {
        user,
        onExpand: row.toggleExpanded,
      });
    },
  },
];
