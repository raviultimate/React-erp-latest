import React from "react";

const Dialog = ({
  isOpen,
  onClose,
  children,
  width = "max-w-md",
  height = "auto",
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={onClose}
            ></div>
            <div
              className={`bg-white rounded-lg p-8 ${width} ${height} mx-auto`}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
