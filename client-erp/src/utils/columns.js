import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { CiCirclePlus } from "react-icons/ci";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import BillIcons from "../components/ui/BillIcons";
import BillInputs from "../components/ui/BillInputs";
import { CREATE, DELETE } from "./constants";
import TableDropDown from "../components/ui/TableDropDown";
import { accountTableActions, itemTableActions } from "./constants";

import { Button } from "@shadcn/button";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@shadcn/checkbox";

import Typeahead from "../components/ui/Typeahead";

import BillIcons from "../components/ui/BillIcons";

// Define the Payment type
const Payment = {
  id: "",
  amount: 0,
  status: "pending", // Assuming you want to provide default values
  email: "",
};

// Define the columns array
const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "account_id",
    header: "Account Id",
  },
  {
    accessorKey: "account_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "account_type",
    header: "Account Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "pending_balance",
    header: "Pending Balance",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    id: "actions",
    cell: ({ row, column, table }) => {
      return (
        <TableDropDown
          row={row}
          column={column}
          table={table}
          actions={accountTableActions}
        />
      );
    },
  },
];

const billColumns = [
  {
    id: "slno",
    accessorKey: "slno",
    header: "Sl No",
    cell: ({ row, column, table }) => <p>{row.index + 1}</p>,
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
  },
  {
    id: "item_name",
    accessorKey: "item_name",
    header: "Item Name",
    cell: BillInputs,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "qty",
    accessorKey: "qty",
    header: "Quantity",
    cell: BillInputs,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "rate",
    accessorKey: "rate",
    header: "Rate",
    cell: BillInputs,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "amount",
    accessorKey: "amount",
    header: "Amount",
    cell: BillInputs,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row, column, table }) => (
      <BillIcons row={row} column={column} table={table} />
    ),
  },
];

const inventoryColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "item_id",
    header: "Item Id",
  },
  {
    accessorKey: "item_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Item Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "rate",
    header: "Rate",
  },
  {
    accessorKey: "total_price",
    header: "Total Price",
  },
  {
    accessorKey: "qty",
    header: "Quantity Remaining",
  },
  {
    accessorKey: "total_qty_bought",
    header: "Total Quantity",
  },
  {
    id: "actions",
    cell: ({ row, column, table }) => {
      return (
        <TableDropDown
          row={row}
          column={column}
          table={table}
          actions={itemTableActions}
        />
      );
    },
  },
];

module.exports = {
  Payment,
  columns,
  billColumns,
  inventoryColumns,
};
