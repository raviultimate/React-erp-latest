import { Button } from "@shadcn/button";
import { Payment, inventoryColumns } from "../../utils/columns";
import { DataTable } from "../../utils/DataTable";
import { itemData } from "../../utils/store";

const InventoryItems = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={inventoryColumns} data={itemData} />
    </div>
  );
};

export default InventoryItems;
