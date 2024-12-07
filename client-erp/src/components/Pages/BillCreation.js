import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@shadcn/typeahead";
import { CiCirclePlus } from "react-icons/ci";
import { CREATE, DELETE } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

import { Popover, PopoverContent, PopoverTrigger } from "@shadcn/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "../../../lib/utils";
import { Button } from "@shadcn/button";
import { useForm } from "react-hook-form";
import Errors from "../ui/Errors";
import React, { useEffect, useState } from "react";
import { frameworks, tableItems } from "../../utils/store";
import { DynamicDataTable } from "../../utils/DynamicDataTable";
import { billColumns } from "../../utils/columns";
import { billInitialData } from "../../utils/store";
import Typeahead from "../ui/Typeahead";

const BillCreation = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    defaultValues: {
      creationDate: new Date().toISOString().substr(0, 10), // Set default value to todays date
    },
  });
  const [open, setOpen] = useState(false);
  const [accvalue, setAccValue] = useState("");
  const [billdata, setBillData] = useState(billInitialData);
  const [billError, setBillError] = useState(false);
  const [totalBillAmount, setTotalBillAmount] = useState(0);
  const navigate = useNavigate();
  console.log(billdata);

  useEffect(() => {
    console.log(
      "totalBillAmount->" +
        billdata.reduce((acc, item) => {
          console.log("=>" + item.amount);
        }, 0)
    );
    setTotalBillAmount(billdata.reduce((acc, item) => acc + item.amount, 0));
    console.log("-->" + totalBillAmount);
  }, [billdata]);

  /*const Typeahead = ({ data }) => {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {accvalue
              ? data.find((framework) => framework.value === accvalue)?.label
              : "Select Account"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search Account..." className="h-9" />
            <CommandEmpty>No account found</CommandEmpty>
            <CommandGroup>
              {data.map((framework) => (
                <CommandItem
                  {...register("accountName", {
                    required: "Account name is mandatory",
                  })}
                  key={framework.value}
                  accvalue={framework.value}
                  onSelect={(currentValue) => {
                    setAccValue(currentValue === accvalue ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      accvalue === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  };*/
  const onSubmitForm = (data) => {
    console.log(data);
  };

  const validateBillData = () => {
    if (billdata[0].item_name) return true;
  };

  const handleManualSubmit = () => {
    // Manually set a value before submitting

    setValue("accountName", accvalue || "");
    setValue("total", totalBillAmount);
    if (validateBillData(billdata)) {
      setBillError(false);
      setValue("billData", billdata);
    } else {
      setBillError(true);
    }
  };

  const addOrDeleteRow = (rowIndex, operation) => {
    if (operation == CREATE) {
      setBillData([
        ...billdata,
        {
          slno: billdata.length,
          item_name: "",
          qty: 0,
          rate: 0,
          amount: 0,
        },
      ]);
    } else if (operation == DELETE) {
      setBillData((prevData) => {
        // Create a new array by filtering out the object at the specified index
        return prevData.filter((_, index) => index !== rowIndex);
      });
    }
  };

  const creatNewAccountHandler = () => {
    navigate("/createAccount");
  };

  const modifyData = (row, column, table, value) => {
    const columnId = column.id;
    const rowIndex = row.index;

    if (columnId == "rate") {
      setBillData((prev) =>
        prev.map((row, index) =>
          index === rowIndex
            ? {
                ...prev[rowIndex],
                ["amount"]: value * billdata[rowIndex]["qty"],
              }
            : row
        )
      );
    }

    setBillData((prev) =>
      prev.map((row, index) =>
        index === rowIndex
          ? {
              ...prev[rowIndex],
              [columnId]: value,
            }
          : row
      )
    );
  };
  const limitedTableItems = tableItems.slice(0, 20);
  const accounts = limitedTableItems.map((element) => {
    return {
      value: element.account_name,
      label: element.account_name,
    };
  });
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} class="m-10 ">
      <div class="p-3">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Create Bill
            </h2>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  htmlFor="bill-type"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Bill Type*
                </label>
                <div class="mt-2">
                  <select
                    {...register("bill-type", {
                      required: "Bill type is mandatory",
                    })}
                    id="bill-type"
                    name="bill-type"
                    autoComplete="bill-type"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">--None--</option>
                    <option>customer</option>
                    <option>vendor</option>
                  </select>
                  <Errors message={errors["bill-type"]?.message} />
                </div>
              </div>
            </div>

            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="bill-type"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Account Name*
                </label>
                <Typeahead
                  displayValue={accvalue}
                  setDisplayValue={setAccValue}
                  data={accounts}
                  register={register}
                  location="accountName"
                  {...register("accountName", {
                    required: "Account name is mandatory",
                  })}
                  setEmptyState={creatNewAccountHandler}
                />
                <Errors message={errors["accountName"]?.message} />
              </div>
              <div class="sm:col-span-2">
                <label
                  htmlFor="creationDate"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date*
                </label>
                <input
                  {...register("creationDate", {
                    required: "Account name is mandatory",
                  })}
                  type="date"
                  name="creationDate"
                  id="creationDate"
                  autoComplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                <Errors message={errors["creationDate"]?.message} />
              </div>
            </div>
          </div>
          <DynamicDataTable
            columns={billColumns}
            data={billdata}
            setData={addOrDeleteRow}
            modifyData={modifyData}
          />
          {billError ? (
            <Errors message={"Atleast One item is required"} />
          ) : null}
          <div class="sm:col-span-1 flex flex-row-reverse mr-8">
            <div class="grid gap-2">
              <label
                htmlFor="discount"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Discount
              </label>
              <input
                {...register("discount")}
                type="number"
                name="discount"
                id="discount"
                autoComplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-1 flex flex-row-reverse mr-8">
            <div class="grid gap-2">
              <label
                htmlFor="total"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Total
              </label>
              <input
                {...register("total", {
                  required: "Total is mandatory",
                })}
                value={totalBillAmount}
                type="number"
                name="total"
                id="total"
                autoComplete="given-name"
                class="block bg-gray-200 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
            <Errors message={errors["total"]?.message} />
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleManualSubmit}
            class="rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default BillCreation;
