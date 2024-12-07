const AccountBills = () => {
  const status = {
    open: (
      <span class="mb-2 inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
        <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
        Open
      </span>
    ),
    pending: (
      <span class="mb-2 inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
        <span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
        Pending
      </span>
    ),
    closed: (
      <span class="mb-2 inline-flex items-center bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
        <span class="w-2 h-2 me-1 bg-gray-500 rounded-full"></span>
        Closed
      </span>
    ),
  };
  return (
    <div class="m-6 w-max">
      <div class="border border-gray-300 bg-gray-50 rounded-lg p-5 w-80 cursor-pointer hover:bg-gray-200">
        {status["closed"]}
        <div class="text-lg font-bold mb-2">BIL1025</div>
        <div class="mb-2">12,05,645</div>
        <button class="px-2 py-1 bg-blue-200  rounded-md hover:bg-gray-200 text-black">
          Update total
        </button>
      </div>
    </div>
  );
};

export default AccountBills;
