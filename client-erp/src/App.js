import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accounts from "./components/Pages/Accounts";
import Dashboard from "./components/Pages/Dashboard";
import AccountCreation from "./components/Pages/AccountCreation";
import BillCreation from "./components/Pages/BillCreation";
import InventoryItems from "./components/Pages/InventoryItems";
import Modal from "./components/Modal";
import LedgerAccountPage from "./components/Pages/LedgerAccountPage";

/*const AppLayout = () => {
  return (
    <>
      <Body />;
    </>
  );
};*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/createAccount",
        element: <AccountCreation />,
      },
      {
        path: "/createbill",
        element: <BillCreation />,
      },
      {
        path: "/shop",
        element: <InventoryItems />,
      },
      {
        path: "/account/:accountId",
        element: <LedgerAccountPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
