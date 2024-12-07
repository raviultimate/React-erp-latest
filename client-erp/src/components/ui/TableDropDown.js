import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@shadcn/dropdown";
import Dialog from "../ui/Dialog";

import { Button } from "@shadcn/button";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TableDropDown = (props) => {
  const { row, column, table, actions } = props;
  const payment = row.original;

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const tableActionHandler = (event) => {
    console.log(event.target.getAttribute("value"), "---<", row.original);
    const rowObject = row?.original;

    navigate(`/account/${rowObject?.account_id}`);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only"></span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          {actions.map((element) => {
            return (
              <DropdownMenuItem
                key={element.value}
                onClick={(e) => {
                  tableActionHandler(e);
                }}
                value={element.value}
              >
                {element.label}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      {showModal ? (
        <>
          <Dialog
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            width="max-w-xl"
            height="h-96"
          >
            <h2 className="text-xl font-bold mb-4">Dialog Content</h2>
            <p>This is the content of the dialog.</p>
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </Dialog>
        </>
      ) : null}
    </>
  );
};

export default TableDropDown;
