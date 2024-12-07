import { Input } from "@shadcn/input";
import { useState } from "react";
import { useEffect } from "react";
import Typeahead from "./Typeahead";
import { itemData } from "../../utils/store";

const BillInputs = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [itemValue, setItemValue] = useState(initialValue);
  const [showItems, setShowItems] = useState(true);

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    table.options?.meta?.modifyData(row, column, table, itemValue);
  }, [itemValue]);

  const columnName = column.id;

  const itemsInInventory = itemData.map((element) => {
    return {
      value: element.item_id,
      label: element.item_name,
    };
  });

  const billInputHandler = () => {
    setShowItems(false);
  };

  const toggleComponent = {
    amount: (
      <Input
        type="text"
        value={value}
        disabled
        class="rounded-md border-gray-300 w-full py-1.5 bg-gray-200"
        placeholder="Enter Amount"
      />
    ),
    qty: (
      <Input
        type="text"
        onBlur={(event) => {
          const inputValue = event.target.value;
          table.options?.meta?.modifyData(row, column, table, inputValue);
        }}
        placeholder="Enter Value"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
      />
    ),
    rate: (
      <Input
        type="text"
        onBlur={(event) => {
          const inputValue = event.target.value;
          table.options?.meta?.modifyData(row, column, table, inputValue);
        }}
        placeholder="Enter Value"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
      />
    ),
    item_name: showItems ? (
      <Typeahead
        displayValue={itemValue}
        setDisplayValue={setItemValue}
        data={itemsInInventory}
        location="itemName"
        setEmptyState={billInputHandler}
      />
    ) : (
      <Input
        type="text"
        onBlur={(event) => {
          const inputValue = event.target.value;
          table.options?.meta?.modifyData(row, column, table, inputValue);
        }}
        placeholder="Enter Value"
        className="block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
      />
    ),
  };

  return (
    <div>
      {toggleComponent[columnName]}
      {/*columnName == "amount" ? (
        <Input
          type="text"
          value={value}
          disabled
          class="rounded-md border-gray-300 w-full py-1.5 bg-gray-200"
          placeholder="Enter Amount"
        />
      ) : (
        <Input
          type="text"
          onBlur={(event) => {
            const inputValue = event.target.value;
            table.options?.meta?.modifyData(row, column, table, inputValue);
          }}
          placeholder="Enter Value"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
        />
        )*/}
    </div>
  );
};

export default BillInputs;
