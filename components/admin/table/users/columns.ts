import { h } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";

import Checkbox from "@/components/ui/checkbox.vue";
import TableCellName from "@/components/admin/table/users/cells/name.vue";
import TableCellStatus from "@/components/admin/table/users/cells/status.vue";
import DataTableRowActions from "~/components/admin/table/users/dropdown.vue";
import type { User } from "~/types";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate"),
        "onUpdate:checked": (value) => table.toggleAllPageRowsSelected(!!value),
        ariaLabel: "Select all",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        ariaLabel: "Select row",
        checked: row.getIsSelected(),
        "onUpdate:checked": (value) => row.toggleSelected(!!value),
        onClick: withModifiers(() => {}, ["stop", "prevent"]),
      }),
  },
  {
    accessorKey: "sn",
    header: "SN",
  },
  {
    accessorKey: "user_id",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const user = row.original;
      return h(
        TableCellName,
        { name: user.name, avatar: user.picture_url },
        row.getValue("name")
      );
    },
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) =>
      h(
        "div",
        { class: "max-w-[15rem] truncate" },
        row.getValue("address") || "N/A"
      ),
  },
  {
    accessorKey: "registered_at",
    header: "Registered Date",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) =>
      h("div", { class: "max-w-[15rem] truncate" }, row.getValue("email")),
  },
  {
    accessorKey: "role_name",
    header: "Role",
    cell: ({ row }) =>
      h("div", { class: "capitalize" }, row.getValue("role_name")),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const user = row.original;
      return h(
        TableCellStatus,
        { status: user.status },
        row.getValue("status")
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return h(
        "div",
        { class: "relative" },
        h(DataTableRowActions, {
          user,
          onExpand: row.toggleExpanded,
        })
      );
    },
  },
];
