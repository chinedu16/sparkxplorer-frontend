import { h } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";
import { Trash } from "lucide-vue-next";

import Button from "@/components/ui/button/index.vue";
import Checkbox from "@/components/ui/checkbox.vue";
import TableCellName from "@/components/admin/table/users/cells/name.vue";
import TableCellStatus from "@/components/admin/table/users/cells/status.vue";
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
    accessorKey: "user_id",
  },
  {
    accessorKey: "name",
    header: "Scholar Name",
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
    accessorKey: "email",
    header: "Email Address",
    cell: ({ row }) =>
      h("div", { class: "max-w-[15rem] truncate" }, row.getValue("email")),
  },
  {
    accessorKey: "registered_at",
    header: "Date Registered",
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
        Button,
        {
          variant: "ghost",
          size: "icon",
          class: "hover:bg-red-50",
          onClick: withModifiers(() => {
            // TODO: make api call to delete user
            console.log(user);
          }, ["stop"]),
        },
        h(Trash, {
          size: 18,
          color: "red",
        })
      );
    },
  },
];
