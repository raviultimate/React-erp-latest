import { CardStackPlusIcon } from "@radix-ui/react-icons";
import { TrashIcon } from "@radix-ui/react-icons";
import { CREATE, DELETE } from "../../utils/constants";

const BillIcons = (props) => {
  const { row, column, table } = props;

  return (
    <div class="flex gap-4">
      <CardStackPlusIcon
        class="cursor-pointer"
        onClick={() => {
          table.options?.meta?.addOrDeleteRows(row.index, CREATE);
        }}
      />
      {row.index != 0 ? (
        <TrashIcon
          class="cursor-pointer"
          onClick={() => {
            table.options?.meta?.addOrDeleteRows(row.index, DELETE);
          }}
        />
      ) : null}
    </div>
  );
};

export default BillIcons;
