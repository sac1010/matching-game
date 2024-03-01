// Modal.tsx

import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className="w-full h-screen bg-black opacity-60 fixed z-10"
          onClick={onClose}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
