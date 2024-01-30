// Modal.js
import React from "react";
import Login from "../container/Login";
import SignUp from "../container/Signup";

const Modal = ({ type, onClose, children }) => {
  if (!type) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md">
        {children}
        <div className="text-right">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-300 rounded-md border hover:bg-rose-600"
          >
            X
          </button>
        </div>
        {type === 1 ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Modal;
