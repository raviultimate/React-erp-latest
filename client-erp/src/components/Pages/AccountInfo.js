import { useForm } from "react-hook-form";
import Errors from "../ui/Errors";
import React, { useState } from "react";
import { tableItems } from "../../utils/store";

const AccountInfo = (props) => {
  const { accountId } = props;

  const accountInfo = tableItems.filter((element) => {
    return element.account_id == accountId;
  });

  console.log("testing", accountInfo);

  const { account_type, account_name, phone_number, address } = accountInfo[0];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div class="m-6 w-max">
        <div class="">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="grid grid-cols-12 gap-x-6 gap-y-8">
              <div class="col-span-4">
                <label
                  htmlFor="account-type"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Account Type*
                </label>
                <div class="mt-2">
                  <select
                    {...register("account-type", {
                      required: "Account type is mandatory",
                    })}
                    value={account_type}
                    id="account-type"
                    name="account-type"
                    autoComplete="account-type-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">--None--</option>
                    <option>customer</option>
                    <option>vendor</option>
                    <option>expense</option>
                    <option>bank</option>
                    <option>cash</option>
                  </select>
                  <Errors message={errors["account-type"]?.message} />
                </div>
              </div>
              <div class="col-span-4">
                <label
                  htmlFor="accountname"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Account Name*
                </label>
                <div class="mt-2">
                  <input
                    {...register("accountname", {
                      required: "Account name is mandatory",
                    })}
                    value={account_name}
                    type="text"
                    name="accountname"
                    id="accountname"
                    autoComplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                  <Errors message={errors?.accountname?.message} />
                </div>
              </div>
              <div class="col-span-4">
                <label
                  htmlFor="phone"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone number*
                </label>
                <div class="mt-2">
                  <input
                    {...register("phone", {
                      required: "Phone number is mandatory",
                    })}
                    value={phone_number}
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                  <Errors message={errors?.phone?.message} />
                </div>
              </div>
            </div>

            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
              <div class="col-span-full">
                <label
                  htmlFor="street-address"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div class="mt-2">
                  <input
                    {...register("street-address")}
                    type="text"
                    value={address}
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div class="mt-2">
                  <input
                    {...register("city")}
                    type="text"
                    value={address}
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  htmlFor="region"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div class="mt-2">
                  <input
                    {...register("region")}
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div class="mt-2">
                  <input
                    {...register("postal-code")}
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
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
            class="rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AccountInfo;
