import { useForm } from "react-hook-form";
import Errors from "../ui/Errors";
import React, { useState } from "react";

//import CustomerVendorForm from "../ui/CustomerVendorForm";

const AccountCreation = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  /*const handleSelectChange = () => {
    reset(); // Reset the form after the select field changes
  };*/

  const CustomerVendorForm = () => {
    return (
      <React.Fragment>
        <div class="sm:col-span-2 sm:col-start-1">
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
              type="text"
              name="phone"
              id="phone"
              autoComplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <Errors message={errors?.phone?.message} />
          </div>
        </div>

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
      </React.Fragment>
    );
  };

  const BankForm = () => {
    return (
      <React.Fragment>
        <div class="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="bankName"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Bank Name*
          </label>
          <div class="mt-2">
            <input
              {...register("bankName", {
                required: "Bank name is mandatory",
              })}
              type="text"
              name="bankName"
              id="bankName"
              autoComplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <Errors message={errors?.bankName?.message} />
          </div>
        </div>
        <div class="sm:col-span-4 sm:col-start-1">
          <label
            htmlFor="accountNum"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Account Number*
          </label>
          <div class="mt-2">
            <input
              {...register("accountNum", {
                required: "Bank name is mandatory",
              })}
              type="text"
              name="accountNum"
              id="accountNum"
              autoComplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <Errors message={errors?.accountNum?.message} />
          </div>
        </div>
        <div class="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="ifsc"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            IFSC*
          </label>
          <div class="mt-2">
            <input
              {...register("ifsc", {
                required: "Bank name is mandatory",
              })}
              type="text"
              name="ifsc"
              id="ifsc"
              autoComplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <Errors message={errors?.branch?.message} />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            htmlFor="branch"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Branch*
          </label>
          <div class="mt-2">
            <input
              {...register("branch", {
                required: "Bank name is mandatory",
              })}
              type="text"
              name="branch"
              id="branch"
              autoComplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <Errors message={errors?.branch?.message} />
          </div>
        </div>
      </React.Fragment>
    );
  };

  const toggleForm = {
    customer: <CustomerVendorForm />,
    bank: <BankForm />,
    vendor: <CustomerVendorForm />,
  };
  const accountType = watch("account-type");

  const onSubmitForm = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} class="m-10 ">
      <div class="p-3">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Create Account
            </h2>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
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
            </div>

            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2 sm:col-start-1">
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
                    type="text"
                    name="accountname"
                    id="accountname"
                    autoComplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                  <Errors message={errors?.accountname?.message} />
                </div>
              </div>

              {toggleForm[accountType]}
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

export default AccountCreation;
