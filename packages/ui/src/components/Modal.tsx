// packages/ui/src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-primary p-6 rounded-lg max-w-md w-full">
        {children}
        <button onClick={onClose} className="mt-4 text-accent">Close</button>
      </div>
    </div>
  );
};

export default Modal;