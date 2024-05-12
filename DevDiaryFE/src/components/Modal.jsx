import React, { useState } from "react";

const FormModal = ({ isOpen, onClose, onSave, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        {children}
        <div className="mt-4 flex justify-end space-x-2">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal