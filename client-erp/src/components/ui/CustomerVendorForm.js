import { useForm } from "react-hook-form";
import Errors from "./Errors";
import React from "react";

const CustomerVendorForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <React.Fragment>
      <div class="sm:col-span-2 sm:col-start-1">
        <label
          for="phone"
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
          for="street-address"
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
          for="city"
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
          for="region"
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
          for="postal-code"
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

export default CustomerVendorForm;
