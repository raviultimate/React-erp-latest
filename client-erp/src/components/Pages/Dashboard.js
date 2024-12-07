const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="flex justify-around mt-16">
        <div className="relative flex flex-col min-w-0 break-words bg-white bg-clip-border-box border-1 border-zf-grey-17">
          <div className="px-6 py-2">
            <span>Total Receivables</span>
          </div>
          <div></div>
        </div>
        <div>
          <span>Total Payables</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
