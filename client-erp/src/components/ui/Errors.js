const Errors = (message) => {
  return (
    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
      {message.message}
    </span>
  );
};

export default Errors;
