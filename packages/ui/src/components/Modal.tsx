// packages/ui/src/components/Modal.tsx
"use client";

import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    padding: '1rem',
  };

  const modalStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    maxWidth: '28rem',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid #E5E7EB',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#00143C',
    margin: 0,
  };

  const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#6B7280',
    cursor: 'pointer',
    padding: '0.25rem',
    borderRadius: '0.25rem',
    transition: 'color 0.2s',
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <div style={headerStyle}>
          {title && <h2 style={titleStyle}>{title}</h2>}
          <button 
            onClick={onClose}
            style={closeButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#374151')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;