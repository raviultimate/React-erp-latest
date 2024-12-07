import { Button } from "@shadcn/button";
import { Payment, columns } from "../../utils/columns";
import { DataTable } from "../../utils/DataTable";
import { tableItems } from "../../utils/store";
//const table = new TanstackTable();

const Accounts = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tableItems} />
    </div>
  );
};

export default Accounts;

/*import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}*/
