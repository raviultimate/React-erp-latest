import React, { useState } from "react";
const Modal = ({ showModal, setShowModal }) => {
  //const [showModal, setShowModal] = useState(true);
  return (
    <>
      <>
        <div>
          <button onClick={openDialog}>Open Dialog</button>
          <Dialog isOpen={isOpen} onClose={closeDialog}>
            <h2 className="text-xl font-bold mb-4">Dialog Content</h2>
            <p>This is the content of the dialog.</p>
            <button
              onClick={closeDialog}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </Dialog>
        </div>
      </>
    </>
  );
};
export default Modal;
