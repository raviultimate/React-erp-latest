import { useNavigate, useParams } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shadcn/tabs";
import AccountInfo from "../Pages/AccountInfo";
import AccountBills from "../Pages/AccountBills";
import AccountTransactions from "./AccountTransactions";

const LedgerAccountPage = () => {
  const { accountId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div
          class="mt-3 mr-12 flex flex-row-reverse cursor-pointer"
          onClick={() => {
            navigate("/accounts");
          }}
        >
          <CgClose />
        </div>
        <div class="m-5 mt-10 mr-12 border border-gray-200">
          <Tabs defaultValue="overview" class="p-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bills">Bills</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p class="ml-2">
                <AccountInfo accountId={accountId} />
              </p>
            </TabsContent>
            <TabsContent value="bills">
              <p class="ml-2 flex flex-wrap">
                <AccountBills accountId={accountId} />
                <AccountBills accountId={accountId} />
                <AccountBills accountId={accountId} />
                <AccountBills accountId={accountId} />
                <AccountBills accountId={accountId} />
                <AccountBills accountId={accountId} />
              </p>
            </TabsContent>
            <TabsContent value="transactions">
              <p class="ml-2 flex flex-wrap">
                <AccountTransactions />
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default LedgerAccountPage;
